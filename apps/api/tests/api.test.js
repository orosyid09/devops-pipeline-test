const request = require("supertest");
const app = require("../src/index");

describe("API Health Check", () => {
  test("GET /health should return status OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});

describe("API Homepage", () => {
  test("GET / should return API message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("DevOps API Running");
  });
});
