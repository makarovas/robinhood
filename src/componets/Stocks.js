import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Stocks.css";

const BASEURL =
  "https://finnhub.io/api/v1/quote/add?token=c929l72ad3ibmc67bn1g";
const JSON = { event: "earnings", symbol: "AAPL" };
const Stocks = () => {
  const [stockData, setStockData] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    const call = async () => {
      const responce = await axios.get(BASEURL, JSON).catch((error) => {
        setError(error);
      });
      setStockData(responce);
    };
    return call();
  }, []);

  console.log(stockData);
  console.log(error);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats_content">
          <div className="stats__rows"></div>
        </div>
        <div className="stats_header">
          <p>Lists</p>
        </div>
        <div className="stats_content">
          <div className="stats__rows"></div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
