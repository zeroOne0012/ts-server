import {Request, Response, NextFunction} from "express";
import HttpError from "../types/http-error";
import memberRepository from "../repository/member.repository";
import Member from "../types/member";

async function getAllMembers():Promise<Member[]>{
    const result:Member[] = await memberRepository.getAllMembers();
    return result;
}

async function getMember():Promise<Member>{
    const result:Member = await memberRepository.getMember();
    return result;
}

async function createMember():Promise<Member>{
    const result:Member = await memberRepository.createMember();
    return result;
}

async function login():Promise<Member>{
    const result:Member = await memberRepository.getMember();
    return result;
}

async function updateMember():Promise<Member>{
    const result:Member = await memberRepository.updateMember();
    return result;
}

async function deleteMember():Promise<Member>{
    const result:Member = await memberRepository.deleteMember();
    return result;
}

export default {
    getAllMembers,
    getMember,
    createMember,
    login,
    updateMember,
    deleteMember,
};