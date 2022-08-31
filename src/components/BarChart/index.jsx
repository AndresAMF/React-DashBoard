import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    // Se recibe la data para el chart via props
  return (
    <div>
      <Bar className="bar-chart" data={chartData} />
    </div>
  );
}

export default BarChart;
