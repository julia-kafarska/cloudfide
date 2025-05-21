import express from "express";
import {
  analyzeBinanceHistoricalTrades,
  getBinanceHistoricalTrades,
} from "../../services/binance.js";
const api_v1 = express.Router();
/**
 * @swagger
 * /api/v1/ping:
 *   get:
 *     summary: health check
 */
api_v1.get("/ping", function (req, res) {
  res.send("pong");
});

/**
 * @swagger
 * /api/v1/analyze:
 *   get:
 *      parameters:
 *         - in: query
 *           name: symbol
 *           required: true
 *           schema:
 *             type: string
 *         - in: query
 *           name: limit
 *           required: true
 *           schema:
 *             type: number
 */
api_v1.get("/analyze", async function (req, res) {
  const { symbol, limit } = req.query;

  const data = await getBinanceHistoricalTrades({
    symbol,
    limit,
  });

  const dataAnalyzed = await analyzeBinanceHistoricalTrades({ data });
  res.send({
    symbol,
    limit,
    priceDifference: dataAnalyzed,
  });
});

export default api_v1;
