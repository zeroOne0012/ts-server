import express, {Express, Request, Response} from "express";
const app:Express = express();
const port:number = 3003;

app.get("/", (req:Request,res:Response)=>{
    res.send("TYPESCRIPT");
});
app.listen(port, ()=>{console.log(`listening ${port}`)});