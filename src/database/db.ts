import "reflect-metadata"
import "dotenv/config";
import { DataSource } from "typeorm"
import { Roles1708945243245 } from "./migrations/1708945243245-roles"
import { Users1708948518429 } from "./migrations/1708948518429-users";
import { Authors1708949814183 } from "./migrations/1708949814183-authors";
import { Books1708950242214 } from "./migrations/1708950242214-books";
import { BookFavourite1708950977173 } from "./migrations/1708950977173-book_favourite";
import { Role } from "../models/Role";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST || "localhost",
port: Number(process.env.DB_PORT) || 3307,
username: process.env.DB_USER || "root",
password: process.env.DB_PASSWORD || "1234",
database: process.env.DB_DATABASE|| "test",
entities: [Role, User],
migrations: [Roles1708945243245, Users1708948518429, Authors1708949814183, Books1708950242214, BookFavourite1708950977173], 
synchronize: false,
logging: false,
})