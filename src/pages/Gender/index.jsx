import React, { useState } from "react";
import PieChart from "../../components/PieChart";

import "./styles.css";

function Metrics(props) {
  const { data } = props;
  const genderObj = {};

  //Busca gender y guarda si no lo encuentra en genderObj y cuenta 1, si existe aúmenta el contador.
  for (let item of data) {
    if (genderObj[item.gender] === undefined) {
      genderObj[item.gender] = 1;
    } else {
      genderObj[item.gender] += 1;
    }
  }
  //Se arma el array de datos que se usará para el gráfico iterando el objeto genderObj
  const genderDataSet = [];

  for (let i = 0; i <= Object.entries(genderObj).length; i++) {
    genderDataSet.push({
      gender: Object.keys(genderObj)[i],
      totalCount: Object.values(genderObj)[i],
    });
  }
  //Se mapea el array y se separan los datos
  const genderSet = genderDataSet.map((data) => data.gender);
  const totalSetGender = genderDataSet.map((data) => data.totalCount);

  //Se setea como valor iniciar de genderData con la data necesaria para el gráfico
  const [genderData] = useState({
    labels: genderSet,
    datasets: [
      {
        label: "Gender",
        data: totalSetGender,
        backgroundColor: ["#AEBAE6", "#6A75BA"],
      },
    ],
  });

  return (
    <div className="chart-gender-container">
      <h1>Gender Chart</h1>
      <PieChart chartData={genderData} />
    </div>
  );
}

export default Metrics;
