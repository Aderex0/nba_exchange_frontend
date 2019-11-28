import React from 'react'
import useGetPlayers from '../hooks/useGetPlayers'
import '../css/PlayerIndex.css'
import PlayerIndexCard from '../components/PlayerIndexCard'

const PlayerIndex = props => {
  const { players } = useGetPlayers()
  return (
    <div className='player-index-box'>
      <table className='live-table'>
        <tbody>
          <tr>
            <th />
            <th />
            <th scope='col'>Qty.</th>
            <th scope='col'>Buy</th>
            <th scope='col'>Sell</th>
          </tr>
        </tbody>
        {players.map(player => (
          <PlayerIndexCard
            key={player.id}
            player={player}
            userId={props.userId}
          />
        ))}
      </table>
    </div>
  )
}

export default PlayerIndex
