const express = require("express");
const { getBinanceHistoricalTrades } = require("../../services/binance");
const api_v1 = express.Router();

api_v1.get("/ping", function (req, res) {
  res.send("pong");
});

// add swagger
api_v1.get("/historical", async function (req, res) {
  try {
    const data = await getBinanceHistoricalTrades({
      symbol: "btc",
      limit: 500,
    });
    console.log({
      res: data,
    });
  } catch (e) {}
});

module.exports = api_v1;
