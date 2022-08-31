import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  // Se recibe la data para el chart via props
  return (
    <div>
      <Pie className="pie-chart" data={chartData} />
    </div>
  );
}

export default PieChart;
