import express, {Express, Request, Response} from "express";
const app:Express = express();

app.get("/", (req:Request,res:Response)=>{
    res.send("TYPESCRIPT");
});

export default app;