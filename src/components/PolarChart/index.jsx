import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PolarChart({ chartData }) {
  return (
    <div>
      <PolarArea className="polar-chart" data={chartData} />
    </div>
  );
}

export default PolarChart;
