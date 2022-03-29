import React from "react";
import "./Chart.css";
import LineGraph from "./LineGraph";

const Chart = ({
  value = "20000,2",
  changesTotal = "15000.2",
  changesPercents = "0.05",
  dayType = "today",
  sign = "-",
}) => {
  return (
    <div className="chart_wrapper">
      <div className="portfolio">
        <div className="portfolio__value">${value}</div>
        <div className="changes">
          <div className="changes__total">${changesTotal}</div>
          <div className="changes__percents">
            {`${sign} ${changesPercents}%`}
          </div>
          <div className="dayType">{dayType}</div>
        </div>
      </div>
      <div className="graph">
        <LineGraph />
      </div>
    </div>
  );
};

export default Chart;
