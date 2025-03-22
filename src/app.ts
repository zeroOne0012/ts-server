import express, {Express} from "express";
import cors from "cors";
import router from "./api/index";

const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api", router);

app.get("/", (req, res)=>{
    res.send("Typescript Server Is Running!");
});

export default app;