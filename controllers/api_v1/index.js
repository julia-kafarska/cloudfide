const express = require("express");
const api_v1 = express.Router();

api_v1.get("/ping", function (req, res) {
  res.send("pong");
});

module.exports = api_v1;
