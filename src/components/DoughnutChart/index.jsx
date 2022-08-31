import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ chartData }) {
  return (
    <div>
      <Doughnut className="doughnut-chart" data={chartData} />
    </div>
  );
}

export default DoughnutChart;
