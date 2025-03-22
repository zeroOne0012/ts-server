import { Request, Response, NextFunction } from 'express';

export default function logger(req:Request, res:Response, next:NextFunction){
    // 전처리 로그
    console.log(`[Request] ${req.method} ${req.url} - ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`);

    // 후처리 로그
    res.on("finish", () => {
        console.log(`[Response] ${res.statusCode} - ${req.method} ${req.url}`);
    });

    next();
}