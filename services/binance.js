// Fetch historical market data for a specific cryptocurrency symbol and time range using the API.
//
//

//
//     Display the analyzed data in a formatted manner.

import axios from "axios";
import { binance_apis, binance_endpoints } from "../cosnt/binance.js";
import { handleError } from "../utils/error_handler.js";

export const analyzeBinanceHistoricalTrades = async ({ data }) => {
  // TODO add real logic
  const priceA = data[0].price;
  const priceB = data[data.length - 1].price;

  return priceB - priceA;
};
export const getBinanceHistoricalTrades = async ({ symbol, limit }) => {
  if (symbol && limit) {
    try {
      const params = `?symbol=${symbol}&limit=${limit}`;
      const { data } = await axios.get(
        `${binance_apis[0]}${binance_endpoints.historicalTrades}${params}`,
      );
      return data;
    } catch (e) {
      console.log(e.message);
      return handleError({
        errorCode: "e1",
      });
    }
  }
  return handleError({
    errorCode: "e2",
  });
};
