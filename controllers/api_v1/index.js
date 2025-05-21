import express from "express";
import {
  analyzeBinanceHistoricalTrades,
  getBinanceHistoricalTrades,
} from "../../services/binance.js";
const api_v1 = express.Router();
/**
 * @swagger
 * /ping:
 *   get:
 *     summary: health check
 */
api_v1.get("/ping", function (req, res) {
  res.send("pong");
});

/**
 * @swagger
 * /ping:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *     responses:
 *       201:
 *         ...
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
