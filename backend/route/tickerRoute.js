const express = require("express");
const { fetchAndStoreTickers, getTickers } = require("../controllers/tickerController");

const router = express.Router();

// Route to fetch and store tickers
router.get("/fetch", fetchAndStoreTickers);

// Route to get tickers
router.get("/", getTickers);

module.exports = router;
