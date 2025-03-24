import {Request, Response, NextFunction} from "express";
import HttpError from "../../types/http-error";
import memberService from "../../service/member.service";
import Member from "../../types/member";

// /api/member/all
async function getAllMembers(req:Request, res:Response, next: NextFunction){
    try{
        const members:Member[] = await memberService.getAllMembers();
        res.status(200).json(members);
    } catch(e){
        console.error(e);
        next(e);
    }
}

async function getMember(req:Request, res:Response, next: NextFunction){
    try{
        const member:Member = await memberService.getMember();
        res.status(200).json(member);
    } catch(e){
        console.error(e);
        next(e);
    }
}

async function register(req:Request, res:Response, next: NextFunction){
    try{
        const member:Member = await memberService.createMember();
        res.status(200).json(member);
    } catch(e){
        console.error(e);
        next(e);
    }
}

async function login(req:Request, res:Response, next: NextFunction){
    try{
        const member:Member = await memberService.login();
        member.id = "loginAPI";
        res.status(200).json(member);
    } catch(e){
        console.error(e);
        next(e);
    }
}
async function updateMember(req:Request, res:Response, next: NextFunction){
    try{
        const member:Member = await memberService.updateMember();
        res.status(200).json(member);
    } catch(e){
        console.error(e);
        next(e);
    }
}
async function deleteMember(req:Request, res:Response, next: NextFunction){
    try{
        const member:Member = await memberService.deleteMember();
        res.status(200).json(member);
    } catch(e){
        console.error(e);
        next(e);
    }
}


export default {
    getAllMembers,
    getMember,
    register,
    login,
    updateMember,
    deleteMember,
};