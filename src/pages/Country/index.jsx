import React, { useState } from "react";
import PolarChart from "../../components/PolarChart";
import "./styles.css";

function Metrics(props) {
  const { data } = props;

  const nationalityObj = {};

  //Busca nationality y guarda si no lo encuentra en nationalityObj y cuenta 1, si existe aúmenta el contador.
  for (let item of data) {
    if (nationalityObj[item.location.country] === undefined) {
      nationalityObj[item.location.country] = 1;
    } else {
      nationalityObj[item.location.country] += 1;
    }
  }
  //Se arma el array de datos que se usará para el gráfico
  const nationalityDataSet = [];

  for (let i = 0; i <= Object.entries(nationalityObj).length; i++) {
    nationalityDataSet.push({
      country: Object.keys(nationalityObj)[i],
      totalCount: Object.values(nationalityObj)[i],
    });
  }
  //Se mapea el array y se separan los datos
  const countrySet = nationalityDataSet.map((data) => data.country);
  const totalSetCountry = nationalityDataSet.map((data) => data.totalCount);

  //Se setea como valor iniciar de countryData con la data necesaria para el gráfico
  const [countryData] = useState({
    labels: countrySet,
    datasets: [
      {
        label: "Country",
        data: totalSetCountry,
        backgroundColor: [
          "#9CA6D9",
          "#8793CC",
          "#7C8AC5",
          "#7280BF",
          "#6777B8",
          "#C9DCE9",
          "#91BAD6",
          "#73A5C6",
          "#528AAE",
          "#2E5984",
          "#1E3F66",
          "#C9DCE9",
          "#96B7D6",
          "#2A63AB",
          "#0C3C80",
          "#001842",
          "#0B1263",
          "#050845",
          "#330067",
          "#4C2881",
          "#624297"

        ],
      },
    ],
  });

  return (
    <div className="chartCointaner">
      <h1>Country Chart</h1>
      <PolarChart chartData={countryData} />
    </div>
  );
}

export default Metrics;
