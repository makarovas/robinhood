import React from "react";
import "./Stocks.css";

const Stocks = () => {
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
