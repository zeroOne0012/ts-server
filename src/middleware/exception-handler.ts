import { Request, Response, NextFunction } from 'express';
import config from "../config/config";
import HttpError from '../types/http-error';

export default function exceptionHandler(err:HttpError, req:Request, res:Response, next:NextFunction){
    const statusCode:number = err.statusCode || 500; // 기본값 500
    if(Math.floor(statusCode/100)===5 && config.dev){ // 개발 모드일 경우,  500~ 에러 콘솔 출력
        console.error(`[Error] ${err.message || "Undefined_Error"}`);
        console.error(`[Error.stack] ${err.stack}`);
    }
    res.status(statusCode).json({
        error: err.type || "Internal Server Error",
        message: err.message || "Undefined Error",
    });
}