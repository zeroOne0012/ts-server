import HttpError from "../types/http-error";
import config from "./config";
import pg from "pg";

const { Pool } = pg;

const user:string = config.user;
const pswd:string = config.pswd;
const host:string = config.host;
const db:string = config.db;
const db_port:number = config.db_port;

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT),
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 30000,
    max: 10,
});

export default pool;