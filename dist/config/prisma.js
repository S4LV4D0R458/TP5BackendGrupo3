// Importación para adpataar Prisma con MariaDB
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import mariadb from "mariadb";
import dotenv from "dotenv";
// Configuración de variables de entorno
dotenv.config();
// El pool reutiliza conexiones y toma sus parámetros de las variables de entorno.
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// Prisma delega las operaciones SQL al adaptador conectado a este pool.
const adapter = new PrismaMariaDb(pool);
// PrismaClient es la clase principal para interactuar con la base de datos
export const prisma = new PrismaClient({ adapter });
//# sourceMappingURL=prisma.js.map