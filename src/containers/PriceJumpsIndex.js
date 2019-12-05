import React from 'react'
import PriceJumpsCard from '../components/PriceJumpsCard'
import '../css/PriceJumps.css'

const PriceJumpsIndex = props => {
  return (
    <div className='price-jumps-container'>
      <table>
        <tr>
          <th />
          <th scope='col' className='increase-title'>
            <p>Change</p>
          </th>
        </tr>
        {props.valuableTrades.map(trade => (
          <PriceJumpsCard
            key={trade.playerId}
            trade={trade}
            activeTab={props.activeTab}
          />
        ))}
      </table>
    </div>
  )
}

export default PriceJumpsIndex
