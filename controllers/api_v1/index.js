import express from "express";
import { getBinanceHistoricalTrades } from "../../services/binance.js";
const api_v1 = express.Router();

api_v1.get("/ping", function (req, res) {
  res.send("pong");
});

// add swagger
api_v1.get("/historical", async function (req, res) {
  const { symbol, limit } = req.params;
  const data = await getBinanceHistoricalTrades({
    symbol,
    limit,
  });
  console.log({
    res: data,
  });
  res.send({ data });
});

export default api_v1;
