import React from 'react'
import { PolarArea} from 'react-chartjs-2'
// import { Chart as ChartJS} from 'chart.js/auto'

function PolarChart({chartData}) {
  return (
    <div style={{width: 700}}>
        <PolarArea data={chartData} />
    </div>
  )
}

export default PolarChart