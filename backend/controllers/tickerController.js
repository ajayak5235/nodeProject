const axios = require("axios");
const Ticker = require("../models/tickerModel");

const fetchAndStoreTickers = async (req, res) => {
  try {
    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(data).slice(0, 10); // Top 10 results

    await Ticker.insertTickers(tickers);
    res.status(200).json({ message: "Data fetched and stored successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTickers = async (req, res) => {
  try {
    const tickers = await Ticker.getAllTickers();
    res.status(200).json(tickers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchAndStoreTickers,
  getTickers,
};
