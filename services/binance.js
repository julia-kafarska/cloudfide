// Fetch historical market data for a specific cryptocurrency symbol and time range using the API.
//
//
//     Analyze the fetched data to identify changes in cryptocurrency prices, such as increases or decreases, over the specified time period.
//
//
//     Display the analyzed data in a formatted manner.

import axios from "axios";
import { binance_apis, binance_endpoints } from "../cosnt/binance.js";
import { handleError } from "../utils/error_handler.js";

export const getBinanceHistoricalTrades = async ({ symbol, limit, res }) => {
  if (symbol && limit) {
    try {
      const params = `?symbol=${symbol}&limit=${limit}`;
      const { data } = await axios.get(
        `${binance_apis[0]}${binance_endpoints.historicalTrades}${params}`,
      );
      return data;
    } catch (e) {
      handleError({
        errorCode: "e1",
        res,
      });
    }
  }
  handleError({
    errorCode: "e2",
    res,
  });
};
