import { useState, useEffect } from 'react'
import API from '../adapters/API'

const useGetHistoricalPrice = () => {
  const [historicalData, setHistoricalData] = useState([])
  const [playerId, setPlayerId] = useState([])

  useEffect(
    () => {
      API.getHistoricalPriceData(playerId).then(historicalData =>
        setHistoricalData(historicalData)
      )
    },
    [playerId]
  )

  return {
    historicalData,
    setHistoricalData,
    playerId,
    setPlayerId
  }
}

export default useGetHistoricalPrice
