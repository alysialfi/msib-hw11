const router = require('../routes.js');
const request = require('supertest');

describe("GET /todo", () => {

    test("should respond with 200 status code", async () => {
        const response = await request(router).get("/todo")
        expect(response.statusCode).toBe(200)
    })
    test("should respond with fields", async () => {
        const response = await request(router).get("/todo")
        expect(response.text).toBe('[{"id":1,"title":"coding"},{"id":2,"title":"working"},{"id":3,"title":"making homework"}]')
    })
    // test("should respond with fields", async () => {
    //     const response = await (await request(router).post("/todo")).send({title: 'cooking'}).set('Accept', 'application/json')
    //     expect(response.text).toBe('Berhasil menambahkan todo')
    // })
});