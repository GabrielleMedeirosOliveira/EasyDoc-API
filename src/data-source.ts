import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
  {
    type: "postgres",

    url: process.env.DB_URL,

    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,

    synchronize: false,

    logging: true,

    entities:
      process.env.NODE_ENV === "production"
        ? ["dist/src/entities/*.js"]
        : ["src/entities/*.ts"],

    migrations:
      process.env.NODE_ENV === "production"
        ? ["dist/src/migrations/*.js"]
        : ["src/migrations/*.ts"],
  }

  //  QUANDO IMPLEMENTARMOS OS TESTES USAREMOS O MODELO ABAIXO:

  // process.env.NODE_ENV === "test"

  // ? {
  //     type: "sqlite",
  //     database: ":memory:",
  //     synchronize: true,
  //     entities: ["src/entities/*.ts"],
  //   }
  // : {
  //     type: "postgres",
  //     host: process.env.DB_HOST,
  //     port: 5432,
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB,
  //     logging: true,
  //     synchronize: true,
  //     entities: ["src/entities/*.ts"],
  //     migrations: ["src/migrations/*.ts"],
  //   }
);

export default AppDataSource;
