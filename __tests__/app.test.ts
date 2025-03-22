import request from "supertest";
import app from "../src/app";
describe('total-test', ()=>{
    test('app-test', async ()=>{
        const res = await request(app).get(`/`);

        expect(res.statusCode).toBe(200);
        // expect(res.body).toEqual({
        //     "Typescript Server Is Running!"
        // });
        expect(res.text).toEqual("Typescript Server Is Running!");
    });
});