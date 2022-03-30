import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import { Utils } from "../heplers";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  { x: 10, y: 20 },
  { x: 104, y: 40 },
  { x: 200, y: 180 },
];

const createMockData = () => {
  let data = [];
  let value = 50;
  for (let i = 0; i < 365; i++) {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(i);
    value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random * 10);
    console.log(date, value);
    data.push({ x: date, y: Number(value) });
  }
  return data;
};

// const options
const LineGraph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(createMockData);
  }, []);

  return (
    <div className="linegraph">
      <Line
        data={{
          position: "top",
          labels: ["jan", "feb", "mart", "apr", "may", "jul"],
          datasets: [
            {
              type: "line",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
          // options: {
          //   responsive: true,
          //   plugins: {
          //     tooltips: {
          //       mode: "index",
          //     },
          //     legend: {
          //       display: false,
          //     },
          //   },
          // },
        }}
      />
    </div>
  );
};

export default LineGraph;
