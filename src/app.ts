import express, {Express} from "express";
import cors from "cors";

const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get("/", (req, res)=>{
    res.send("Typescript Server Is Running!");
});

export default app;