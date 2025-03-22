import {Request, Response, NextFunction} from "express";
import HttpError from "../../types/http-error";

// export const getAllUser = async (req:Request, res:Response) => {
export async function getAllUser(req:Request, res:Response){
    try{
        // example
        res.status(200).json({user1: "Lucy", user2: "Daniel"})
    } catch(e){
        console.error(e);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function errorTest(req:Request, res:Response, next:NextFunction){
    next(new HttpError(404, "NOT-Found-Test", "Message"));
}
