import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ chartData }) {
    // Se recibe la data para el chart via props
  return (
    <div>
      <Doughnut className="doughnut-chart" data={chartData} />
    </div>
  );
}

export default DoughnutChart;
