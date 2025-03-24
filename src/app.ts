import express, {Express} from "express";
import cors from "cors";
import router from "./api/api";
import logger from "./middleware/logger";
import config from "./config/config";
import exceptionHandler from "./middleware/exception-handler";

const app:Express = express();


// 미들웨어 & 라우터 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

if(config.dev){ // dev 모드
    app.use(logger);
    if(config.dev) console.log("Dev-Mode");
}

app.use("/api", router);
app.get("/", (req, res)=>{
    res.send("Typescript Server Is Running!");
});

app.use(exceptionHandler);


export default app;