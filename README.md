# Easy Doc API 🏥
Uma aplicação para gerenciamento de hisórico de consultas de pacientes.

# ROTAS 

## Paciente:

### POST – /pacientes/register 
Responsável por cadastrar um novo paciente. 

**Requisitos**: 
  - Autenticação: O usuário precisa estar autenticado para poder cadastrar um paciente

Os dados solicitados pela API são:
```
    {
   	"nome": "",
	"dataNascimento": "01/01/2000",
	"cidadeOrigem": "", 
	"idade": 22,
	"nomeBebe": "",
	"nomePai": "",
	"diagnostico": "", 
	"procedimentos": "",
	"caritotipo": "",
	"cpf": "",
	"email": "", 
	"arquivos_id": ""
    }
    
 ```   

| Campos NOT NULL | Mensagem |
|--|--|
|nome | "" |
|cpf|""|
|dataNascimento|""|
|cidadeOrigem|""|
|idade|""|
|diagnostico|""|

   
**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|201 |Sucesso	Paciente |cadastrado com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|403 |Não autorizado |Verifique a autenticação de ADM ou Token. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 



### GET – /pacientes
Rota responsável por listar todos os pacientes. 

**Requisitos:**
- Autenticação
- Ser ADM, professor ou R4
  

### GET – /pacientes/:id 
Rota responsável por listas um paciente especifico com base no ID.

**Requisitos:**
- Autenticação

### PATCH – /pacientes/:id 
Rotas responsável por editar dados dos pacientes.

**Requisitos:**
- Autenticação

### DELETE – /pacientes/:id
Rotas responsável por desativar um paciente.

**Requisitos:**
- Autenticação
- Ser ADM.

---

## Médico 👨🏼‍⚕️

### POST – /medicos/register
Responsável por cadastrar um novo médico. 

**Requisitos:** 
- Nenhum

Os dados solicitados pela API são:

```
    {
    "nome": "kamila",
    "email": "kamila@gmail.com" ,
    "password": "1234", 
    "categoria": "R4" 
    }
```

| Campos NOT NULL | Mensagem |
|--|--|
|nome | "" |
|email|""|
|password|""|
|categooria|""|

**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|201 |Sucesso |	Medico cadastrado com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 

### GET – /medicos/
Responsável por listar todos os médicos. 

**Requisitos:**
- Autenticação
- Ser ADM ou professor.

###  GET – /medicos/:id
Responsável por listar um medico especifico por meio do ID.

**Requisitos:** 
- Autenticação
- Ser ADM ou professor

### PATCH – /medicos/:id 
Responsável por alterar os dados de um médico especifico.

**Requisitos:** 
- Autenticação
- Ser o próprio usuário;
- Ser ADM.

### DELETE – /medicos/id
Rotas responsável por desativar um medico, todos os dados de um médico são mantidos por preservação de dados. 
**Requisitos:** 
- Autenticação.
- Ser ADM.

---

## Login

### POST – /login
Responsável por logar um medico. 

**Requisitos:** 
- Nenhum

Os dados solicitados pela API são:

```
    {
    "nome": "kamila",
    "email": "kamila@gmail.com" ,
    }
```    

| Campos NOT NULL | Mensagem |
|--|--|
|email|""|
|password|""|

**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|200 |Sucesso |	Medico cadastrado com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 

## Exame de imagem

### POST – /exame_imagem/register
Responsável por cadastra um novo exame.

**Requisitos:** 
- Autenticação.

Os dados solicitados pela API são:

Os dados solicitados pela API são:
```
    {    
   	"laudo": "uma string",
	"anexos": ""
    }
```

| Campos NOT NULL | Mensagem |
|--|--|
|- | - |


**Retornos:**

| Status	| Mensagem	| Descrição |
|--|--|--|
201 | Sucesso | cadastrado com sucesso.
401 | Falha | na requisição	Falta algum dado na requisição.
403 | Não autorizado | Verifique a autenticação do Token
500 | Erro interno | Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /exame_imagem
Responsável por listrar todos os exames de imagem. 

**Requisitos:** 
- Autenticação.

### GET – /exame_imagem/:id
Responsável por listar um exame especifico. 

**Requisitos:** 
- Autenticação.

### PATCH – /exame_imagem/:id
Responsável por editar um exame especifico. 

**Requisitos:**
- Autenticação.

### DELETE -  /exame_imagem/:id
Responsável por deletar um exame especifico. 

**Requisitos:** 
- Autenticação
- Ser ADM.

---

## Exame Laboratorial

### POST – /exame_laboratorial/register
Responsável por cadastra um novo exame. 

**Requisitos:** 
- Autenticação

Os dados solicitados pela API são:

```
    {
        "gs/rh": "",
        "coombs": "",
        "hb/ht": "",
        "plaq": "",
        "gj": "",
        "gpd": "",
        "vdrl": "",
        "hbsag": "",
        "antihiv": "",
        "antihcv": "",
        "antihtlv": "",
        "toxop": "",
        "rubéola": "",
        "cmv": "",
        "tsh": "",
        "eas": "",
        "urocult": "",
        "strep": "",
        "Eletro": ""
    }
```

| Campos NOT NULL | Mensagem |
|--|--|
|- | - |

**Retornos:**
Status | Mensagem | Descrição
| -- | -- | -- |
201 | Sucesso |	 cadastrado com sucesso.
401	| Falha na requisição |	Falta algum dado na requisição.
403 | Não autorizado | Verifique a autenticação de Token
500 | Erro interno | Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /exame_laboratorial
Responsável por listrar todos os exames de imagem. 

**Requisitos:** 
- Autenticação.

### GET – /exame_laboratorial/paciente/:id
Responsável por listar um exame especifico. 

**Requisitos:** 
- Autenticação.

### PATCH – /exame_laboratorial /:id
Responsável por editar um exame especifico. 

**Requisitos:** 
- Autenticação.

### DELETE -  /exame_laboratorial /:id
Responsável por deletar um exame especifico. 

**Requisitos:**
- Autenticação
- Ser ADM.

---

## Consulta Zero

### POST – /consulta_zero/register
Responsável por cadastrar uma nova consulta.

**Requisitos:** 
- Autenticação

Os dados solicitados pela API são:

```
    {
        "paridade": "" (NOT NULL)
        "consanguinidade": "" (NOT NULL)
        "dataMenstruação": "";
        "primeiroUltrassom": "" 
        "semanaGestacional": number (NOT NULL)
        "diaGestacional": "" (NOT NULL)
        "historiaPregressa": "" (NOT NULL)
        "historiaGinecologicaObstetrica": "" (NOT NULL)
    }
```

| Campos NOT NULL | Mensagem |
|--|--|
|paridade | "" |
|consanguinidade|""|
|semanaGestacional|""|
|diaGestacional|""|
|historiaPregressa|""|
|historiaGinecologicaObstetrica|""|

Retornos:
Status|Mensagem|Descrição
|--|--|--|
201|Sucesso|cadastrado com sucesso.
401|Falha na requisição|Falta algum dado na requisição.
403|Não autorizado|Verifique a autenticação de Token
500|Erro interno|Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /consulta_zero
Responsável por listar todas as consultas

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4

### GET – /consulta_zero/paciente/:id   
Responsável por listar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### PATCH – /consulta_zero /:id 
Responsável por editar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### DELETE -  /consulta_zero /:id   
Responsável por desativar uma consulta especifica.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

---

## Consultas

### POST – /consultas/register  
Responsável por cadastrar uma nova consulta.

**Requisitos:** 
- Autenticação.

Os dados solicitados pela API são:

```
    {
        peso: number (NOT NULL)
        pressaoArterial: string
        uteroFita: string
        apresentação: string
        movimentacaoFetal: string
        batimentoCardiacoFetal: string
        edema: string
        toqueVaginal: string
        conduta: string
        retorno: Date ex: 10-12-2022
    }
```

| Campos NOT NULL | Mensagem |
|--|--|
|peso | "" |
|idadeGestacional | "" |
|pressaoArterial | "" |


Retornos:
Status|Mensagem|Descrição
|--|--|--|
201|Sucesso|cadastrado com sucesso.
401|Falha na requisição|Falta algum dado na requisição.
403|Não autorizado|Verifique a autenticação de Token
500|Erro interno|Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /consultas
Responsável por listar todas as consultas.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

### GET – /consultas/paciente/:id
Responsável por listar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### DELETE -  /consultas/:id
Responsável por desativar uma consulta especifica.

**Requisitos:** 
- Autenticação.
- Ser ADM, professor ou R4.

---

## Prontuário

O prontuario é criado junto do paciente.

### GET – /prontuarios
Responsável por listar todos os prontuários.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

### GET – /prontuarios/pacientes/:id
Responsável por listar um prontuário especifico.

**Requisitos:** 
- Autenticação.

### GET – /prontuarios/consultas/:id
Responsável por lista todos os prontuários com base em uma palavra chave.

**Requisitos:** 
- Autenticação

### PATCH – /prontuarios/:id
Responsável por editar um prontuário especifico.

**Requisitos:** 
- Autenticação

### DELETE -  /prontuarios/:id
Responsável por desativar um prontuário.   

**Requisitos:** 
- Autenticação 
