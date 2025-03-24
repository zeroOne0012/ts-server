import HttpError from "../types/http-error";
import pool from "../config/pool";
import Member from "../types/member";

async function getAllMembers():Promise<Member[]>{
    const temp:Member[] = [{id:"get", password:"AllMembers", admin:true},{id:"test", password:"test", admin:true}];
    return temp;
}

async function getMember():Promise<Member>{
    const temp:Member = {id:"get", password:"member", admin:true};
    return temp;
}

async function createMember():Promise<Member>{
    const temp:Member = {id:"create", password:"member", admin:true};
    return temp;
}

async function updateMember():Promise<Member>{
    const temp:Member = {id:"update", password:"member", admin:true};
    return temp;
}

async function deleteMember():Promise<Member>{
    const temp:Member = {id:"delete", password:"member", admin:true};
    return temp;
}

export default {
    getAllMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember,
};