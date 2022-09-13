import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Charts = (props) => {
  return (
    <Line
      width={550}
      height={180}
      data={{
        labels: props.chartLabels,
        datasets: [
          {
            label: "ALL STATS",
            fill: false,
            lineTension: 0.5,
            color: "rgb(239,245,252,1)",
            backgroundColor: "rgb(68,138,255,1)",
            pointBackgroundColor: "rgb(68,138,255,0.8)",
            borderColor: "rgb(68,138,255,1)",
            borderWidth: 2,
            data: props.statsLine,
          },
        ],
      }}
      options={{
        title: {
          display: true,
        },
        legend: {
          display: true,
          position: "top",
        },
      }}
    />
  );
};

export default Charts;
