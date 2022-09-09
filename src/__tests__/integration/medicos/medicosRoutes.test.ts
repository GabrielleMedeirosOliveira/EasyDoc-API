import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { loginMedicoNormal, loginMedicoProfessor, medicoNormal, medicoProfessor } from "../../mocks";



describe("/users", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /medico/register - Possível cadastrar um médico", async () =>{
        const res = await request(app).post('/medico/register').send(medicoNormal)

        expect(res.body).toHaveProperty("nome")
        expect(res.body).toHaveProperty("email")
        expect(res.body).toHaveProperty("categoria")
        expect(res.body).toHaveProperty("criadoEm")
        expect(res.body).toHaveProperty("atualizadoEm")
        expect(res.body).toHaveProperty("estaAtivo")
        expect(res.body).toHaveProperty("adm")
        expect(res.body).not.toHaveProperty("senha")
        expect(res.body.nome).toEqual("Cayo")
        expect(res.body.email).toEqual("cayo@gmail.com")
        expect(res.body.estaAtivo).toEqual(true)
        expect(res.body.adm).toEqual(false)
        expect(res.status).toBe(201)
    })

    test("POST /medico/register - Possível cadastrar um médico professor", async () =>{
        const res = await request(app).post('/medico/register').send(medicoProfessor)

        expect(res.body).toHaveProperty("nome")
        expect(res.body).toHaveProperty("email")
        expect(res.body).toHaveProperty("categoria")
        expect(res.body).toHaveProperty("criadoEm")
        expect(res.body).toHaveProperty("atualizadoEm")
        expect(res.body).toHaveProperty("estaAtivo")
        expect(res.body).toHaveProperty("adm")
        expect(res.body).not.toHaveProperty("senha")
        expect(res.body.nome).toEqual("Kamila")
        expect(res.body.email).toEqual("kamila@gmail.com")
        expect(res.body.estaAtivo).toEqual(true)
        expect(res.body.adm).toEqual(true)
        expect(res.body.categoria).toEqual("R4")
        expect(res.status).toBe(201)
    })

    test("POST /medico/register -  Não é possível cadastrar um médico já cadastrado",async () => {
        const response = await request(app).post('/users').send(medicoNormal)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })
    
    test("POST /medico/register -  Não é possível cadastrar um professor já cadastrado",async () => {
        const response = await request(app).post('/users').send(medicoProfessor)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })

    test("GET /medico - Possível listar todos os médicos", async () =>{
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor)
        const response = await request(app).get('/medico').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.body).toHaveLength(2)
        expect(response.status).toBe(200)
    })

    test("GET /medico - Não é possível listar todos os médicos sem autorização", async () =>{
        const normalDoctorLoginResponse = await request(app).post("/login").send(loginMedicoNormal)
        const response = await request(app).get('/medico').set("Authorization", `Bearer ${normalDoctorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
    })
 
    test("DELETE /medico/:id -  Possível desativar um médico",async () => {
        const professorLoginResponse = await request(app).post("/login").send(medicoProfessor);
        const doctorTobeDeleted = await request(app).get('/medico').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        
        const response = await request(app).delete(`/medico/${doctorTobeDeleted.body[0].id}`)
        const findUser = await request(app).get('/medico').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.status).toBe(204)
        expect(findUser.body[0].isActive).toBe(false)
    })
    
    test("DELETE /medico/:id -  Não é possível desativar um médico sem ser professor",async () => {
        const doctorLoginResponse = await request(app).post("/login").send(medicoNormal);
        const doctorTobeDeleted = await request(app).get('/medico').set("Authorization", `Bearer ${doctorLoginResponse.body.token}`)

        const response = await request(app).delete(`/medico/${doctorTobeDeleted.body[0].id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
             
    })

    test("DELETE /medico/:id -  Não é possível desativar um médico com id inválido",async () => {
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);
        
        const response = await request(app).delete(`/medico/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
     
    })
    
})