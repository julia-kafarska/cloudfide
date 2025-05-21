// Fetch historical market data for a specific cryptocurrency symbol and time range using the API.
//
//
//     Analyze the fetched data to identify changes in cryptocurrency prices, such as increases or decreases, over the specified time period.
//
//
//     Display the analyzed data in a formatted manner.

import axios from "axios";
import { binance_apis, binance_endpoints } from "../cosnt/binance";
import { messages, handleError } from "../utils/error_handler";

export const getBinanceHistoricalTrades = async ({ symbol, limit }) => {
  if (symbol && limit) {
    try {
      const params = `?symbol=${symbol}&limit=${limit}`;
      const { data } = await axios.get(
        `${binance_apis[0]}${binance_endpoints.historicalTrades}${params}`,
      );
      return data;
    } catch (e) {
      handleError("e1");
    }
  }
  handleError("e2");
};
