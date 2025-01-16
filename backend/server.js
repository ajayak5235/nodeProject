const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tickerRoutes = require("./route/tickerRoute");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tickers", tickerRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
