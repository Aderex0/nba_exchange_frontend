import React from 'react'
import '../css/PlayerIndexCard.css'
import useTrade from '../hooks/useTrade'
import API from '../adapters/API'

const PlayerIndexCard = props => {
  const { firstName, lastName, buy, sell, playerId } = props.player
  const { qty, trackQty } = useTrade()

  const handlePurchase = e => {
    e.preventDefault()

    if (props.userId) {
      if (qty > 0) {
        const purchaseDetails = {
          user_id: props.userId,
          playerId: playerId,
          price: buy,
          qty: qty
        }
        API.buyPlayer(purchaseDetails).then(playerData => {
          props.setAccountBalance(playerData.account_balance)
          alert(
            `You have bought ${playerData.qtyOwned} x ${playerData.firstName} ${
              playerData.lastName
            } for £ ${playerData.qtyOwned * playerData.boughtPrice}`
          )
          props.updateOwnedPlayers()
        })
      }
    }
  }

  return (
    <tbody>
      <tr className='live-tr'>
        <td
          onClick={() => {
            props.setPlayerId(playerId)
          }}
          className='player-name'
        >
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
            min='1'
            max='100'
          />
        </td>
        <td align='center'>
          <div>
            <p>{buy}</p>
          </div>
        </td>
        <td align='center'>
          <div>
            <p>{sell}</p>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default PlayerIndexCard
