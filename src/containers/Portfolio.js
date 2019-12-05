import React, { useEffect } from 'react'
import '../css/Portfolio.css'
import OwnedPlayerCard from '../components/OwnedPlayerCard'
import HistoricalPriceChart from '../components/HistoricalPriceChart'

const Portfolio = ({
  updateOwnedPlayersFromAPI,
  ownedPlayers,
  userId,
  setAccountBalance,
  history,
  positionStyle,
  historicalData,
  setPlayerId,
  graphToggle
}) => {
  useEffect(() => {
    if (!userId) {
      history.push('/')
    }
  })

  return (
    <div className='portfolio-container'>
      <h1>Portfolio</h1>
      <div className='portfolio-box'>
        <table className='portfolio-table'>
          <tr>
            <th />
            <th scope='col'>Selling</th>
            <th scope='col'>Qty.</th>
            <th scope='col'>Receive</th>
            <th scope='col'>Profit/Loss</th>
            <th scope='col'>Qty. Owned</th>
            <th scope='col'>Bought at</th>
            <th scope='col'>Sell Price</th>
            <th scope='col'>+/-</th>
          </tr>
          {ownedPlayers.map(player => (
            <OwnedPlayerCard
              key={player.id}
              player={player}
              userId={userId}
              updateOwnedPlayers={updateOwnedPlayersFromAPI}
              setAccountBalance={setAccountBalance}
              setPlayerId={setPlayerId}
            />
          ))}
        </table>
        {graphToggle && (
          <div style={positionStyle}>
            <HistoricalPriceChart historicalData={historicalData} å />
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio
