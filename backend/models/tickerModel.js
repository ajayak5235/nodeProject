const pool = require("../config/database");

// Create table
pool.query(`
  CREATE TABLE IF NOT EXISTS tickers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    last NUMERIC,
    buy NUMERIC,
    sell NUMERIC,
    volume NUMERIC,
    base_unit VARCHAR(10)
  );
`);

const Ticker = {
  insertTickers: async (tickers) => {
    try {
      await pool.query("TRUNCATE TABLE tickers");
      const query = `
        INSERT INTO tickers (name, last, buy, sell, volume, base_unit)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;

      for (const ticker of tickers) {
        await pool.query(query, [
          ticker.name,
          ticker.last,
          ticker.buy,
          ticker.sell,
          ticker.volume,
          ticker.base_unit,
        ]);
      }
    } catch (error) {
      throw error;
    }
  },

  getAllTickers: async () => {
    try {
      const result = await pool.query("SELECT * FROM tickers");
      return result.rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Ticker;
