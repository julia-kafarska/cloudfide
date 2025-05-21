const app = require("express");
const request = require("supertest");
const { describe, expect, it } = require("@jest/globals");

describe("GET /api/v1/ping", function () {
  it("responds with 'pong'", function () {
    const test = request(app).get("api/v1/ping");
    return expect(test).toEqual("pong");
  });
});
