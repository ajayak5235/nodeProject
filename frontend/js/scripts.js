// API URLs
// API URLs
const FETCH_TICKERS_URL = "http://localhost:3000/api/tickers/fetch";
const GET_TICKERS_URL = "http://localhost:3000/api/tickers";

function formatNumber(value) {
    return Math.round(value).toLocaleString("en-IN"); // Use Indian numbering format
  }

  // Dark mode toggle
  const toggleButton = document.getElementById('themeToggle');
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });
  
// Fetch and display tickers
async function fetchAndDisplayTickers() {
  try {
    // Fetch the latest tickers from the backend
    await fetch(FETCH_TICKERS_URL);

    // Get tickers from the backend
    const response = await fetch(GET_TICKERS_URL);
    let tickers = await response.json();

    // Limit to the first 10 entries
    tickers = tickers.slice(0, 10); // Get only the first 10 entries
    if (tickers.length > 0) {
        const firstTickerLast = tickers[0].last;
        const averagePriceDiv = document.querySelector(".average-price");
        averagePriceDiv.textContent = `₹ ${formatNumber(firstTickerLast)}`;
      }

    // Populate the table
    const tableBody = document.querySelector("#table-body");
    tableBody.innerHTML = ""; // Clear existing data

    tickers.forEach((ticker, index) => {
        const row = document.createElement("tr"); // Use "div" instead of "tr" for grid layout
        row.className = "table-row"; // Add the class for consistent styling
        row.innerHTML = `
          <div>${index + 1}</div>
          <div>${ticker.name}</div>
          <div>${ticker.last}</div>
          <div>${ticker.buy}</div>
          <div>${ticker.sell}</div>
          <div>${ticker.volume}</div>
          <div>${ticker.base_unit}</div>
        `;
        tableBody.appendChild(row);
      });
  } catch (error) {
    console.error("Error fetching tickers:", error);
  }
}

// Fetch data when the page is loaded
document.addEventListener("DOMContentLoaded", fetchAndDisplayTickers);

