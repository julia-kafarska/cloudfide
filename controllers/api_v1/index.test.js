const { describe, expect, it } = require("@jest/globals");
const axios = require("axios");

describe("GET /api/v1/ping", function () {
  it("responds with 'pong'", async function () {
    const test = await axios.get("http://localhost:3000/api/v1/ping");
    expect(test.data).toEqual("pong");
  });
});
