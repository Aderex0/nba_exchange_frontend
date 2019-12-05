import React, { useEffect, useState } from 'react'
import ScoreCard from '../components/ScoreCard'
import '../css/ScoreIndex.css'
import API from '../adapters/API'

const ScoreIndex = () => {
  const [gameDetails, setGameDetails] = useState([])

  useEffect(() => {
    API.getGameDetails().then(gameDetails => {
      gameDetails.sort((a, b) => {
        let first = new Date(b.game.startTime)
        let second = new Date(a.game.startTime)
        return first - second
      })
      setGameDetails(gameDetails)
    })
  }, [])

  return (
    <div className='box-score-container'>
      <div className='box-score-box' />
      {gameDetails.map(game => (
        <ScoreCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default ScoreIndex
