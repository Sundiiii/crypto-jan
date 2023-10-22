import React from 'react'
import { Line } from 'react-chartjs-2';
import { chart as chartjs } from "chart.js/auto" //do not remove *Line* uses this library
export default function Coinpage_chart({ chartdata,multiAxis }) {
  const option = {
    plugins: {
      legend: {
        display: multiAxis ?true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intexsect: false,
    },
    scales: {
      crypto1: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      crypto2: multiAxis && {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
  }
  return (
    <Line data={chartdata} options={option}/>
  )
}
