import React from 'react'
import { Chart } from 'react-google-charts'
import '../css/HistoricalPriceChart.css'

const options = {
  hAxis: {
    title: 'Date'
  },
  vAxis: {
    title: 'Price'
  },
  chart: {
    title: '7 Day price performance'
  }
}

const HistoricalPriceChart = ({ history, historicalData }) => {
  let createChartData = () => {
    let chartData = [['date', 'price']]
    historicalData.forEach(data => {
      chartData.push([data.date.slice(5).toString(), data.buy])
    })
    return chartData
  }

  return (
    <div className='historical-chart-box'>
      <button className='chart-exit'>X</button>
      <Chart
        width={'400px'}
        height={'200px'}
        chartType='LineChart'
        loader={<div>Loading Chart</div>}
        data={createChartData()}
        options={options}
      />
    </div>
  )
}

export default HistoricalPriceChart
