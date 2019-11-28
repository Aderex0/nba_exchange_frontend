import React from 'react'
import '../css/PlayerIndexCard.css'
import useTrade from '../hooks/useTrade'
import API from '../adapters/API'

const PlayerIndexCard = props => {
  const { firstName, lastName, buy, sell, playerId } = props.player
  const { qty, trackQty } = useTrade()

  const handlePurchase = e => {
    e.preventDefault()
    const purchaseDetails = {
      user_id: props.userId,
      playerId: playerId,
      price: buy,
      qty: qty
    }
    API.buyPlayer(purchaseDetails)
  }

  return (
    <tbody>
      <tr>
        <td className='player-name'>
          {firstName} {lastName}
        </td>
        <td align='center'>
          <input
            onClick={e => handlePurchase(e)}
            type='submit'
            value='BUY'
            name='buying'
            form='buy_form'
            className='buy-btn'
          />
        </td>
        <td align='center'>
          <input
            onChange={e => trackQty(e.target.value)}
            type='number'
            form='buy_form'
            name='buying'
            value={qty}
            className='buy-input'
          />
        </td>
        <td align='center'>
          <p>{buy}</p>
        </td>
        <td align='center'>
          <p>{sell}</p>
        </td>
      </tr>
    </tbody>
  )
}

export default PlayerIndexCard
