import dotenv from "dotenv";
dotenv.config()

const isDev = process.env.NODE_ENV !== "production";
const config = {
    url: "localhost",
    port: 3001,
    dev: isDev,

    user: process.env.POSTGRES_USER || "user",
    pswd: process.env.POSTGRES_PASSWORD || "pswd",
    host: process.env.POSTGRES_HOST || "localhost",
    db: process.env.POSTGRES_DB || "db",
    db_port: Number(process.env.POSTGRES_PORT) || 5432
};
export default config;