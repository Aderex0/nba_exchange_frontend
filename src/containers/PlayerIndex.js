import React, { useState, useEffect } from 'react'
import '../css/PlayerIndex.css'
import PlayerIndexCard from '../components/PlayerIndexCard'
import API from '../adapters/API'

const PlayerIndex = props => {
  const [players, setPlayers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const updateSearchTerm = e => setSearchTerm(e.target.value)

  useEffect(() => {
    API.getPlayers().then(setPlayers)
  }, [])

  const displayedPlayers = players.filter(player =>
    player.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='player-index-box'>
      <table className='live-table'>
        <tbody>
          <tr>
            <th>
              <input
                onChange={updateSearchTerm}
                placeholder='Search for players...'
                type='text'
              />
            </th>
            <th />
            <th scope='col'>Qty.</th>
            <th scope='col'>Buy</th>
            <th scope='col'>Sell</th>
          </tr>
        </tbody>
        {displayedPlayers.map(player => (
          <PlayerIndexCard
            key={player.id}
            player={player}
            userId={props.userId}
            setAccountBalance={props.setAccountBalance}
            updateOwnedPlayers={props.updateOwnedPlayers}
            setPlayerId={props.setPlayerId}
          />
        ))}
      </table>
    </div>
  )
}

export default PlayerIndex
