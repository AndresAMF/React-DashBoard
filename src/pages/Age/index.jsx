import React, { useState } from "react";
import BarChart from "../../components/BarChart";
import "./styles.css";

function Metrics(props) {
  const { data } = props;
  const ageObj = {};

  //Busca age y guarda si no lo encuentra en ageObj y cuenta 1, si existe aúmenta el contador.
  for (let item of data) {
    if (ageObj[item.dob.age] === undefined) {
      ageObj[item.dob.age] = 1;
    } else {
      ageObj[item.dob.age] += 1;
    }
  }
  //Se arma el array de datos que se usará para el gráfico
  const ageDataSet = [];

  for (let i = 0; i <= Object.entries(ageObj).length; i++) {
    ageDataSet.push({
      age: Object.keys(ageObj)[i],
      totalCount: Object.values(ageObj)[i],
    });
  }
  //Se mapea el array y se separan los datos
  const ageSet = ageDataSet.map((data) => data.age);
  const totalSetAge = ageDataSet.map((data) => data.totalCount);

  //Se setea como valor iniciar de ageData con la data necesaria para el gráfico
  const [ageData] = useState({
    labels: ageSet,
    datasets: [
      {
        label: "Amount",
        data: totalSetAge,
        backgroundColor: [
          "#9CA6D9",
          "#8793CC",
          "#7C8AC5",
          "#7280BF",
          // "#6777B8",
          // "#C9DCE9",
          // "#91BAD6",
          // "#73A5C6",
          // "#528AAE",
          // "#2E5984",
          // "#1E3F66",
          // "#C9DCE9",
          // "#96B7D6",
          // "#2A63AB",
          // "#0C3C80",
          // "#001842",
          // "#0B1263",
          // "#050845",
          // "#330067",
          // "#4C2881",
          // "#624297"
        ],
      },
    ],
  });

  return (
    <div className="chartCointaner">
      <h1>Age Chart</h1>
      <BarChart chartData={ageData} />
    </div>
  );
}

export default Metrics;
