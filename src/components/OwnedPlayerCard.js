import React from 'react'
import '../css/OwnedPlayerCard.css'
import API from '../adapters/API'

import useTrade from '../hooks/useTrade'

const OwnedPlayerCard = props => {
  const { qtyOwned, boughtPrice, player, playerId, id } = props.player
  const { qty, trackQty } = useTrade()

  const handleSale = e => {
    e.preventDefault()

    if (qty <= qtyOwned && qty > 0) {
      const saleDetails = {
        user_id: props.userId,
        playerId: playerId,
        price: player.sell,
        qty: qty,
        transaction_id: id
      }

      API.sellPlayer(saleDetails).then(userData => setBalanceAndQty(userData))
    }
  }

  const setBalanceAndQty = userData => {
    props.setAccountBalance(userData.account_balance)
    props.updateOwnedPlayers()
  }

  const profitLoss = () => {
    let color
    ;(qty * player.sell - qty * boughtPrice).toFixed(2) > 0
      ? (color = { color: 'green' })
      : (color = { color: 'red' })
    return color
  }

  const priceChange = () => {
    let color
    ;(player.sell - boughtPrice).toFixed(2) > 0
      ? (color = { color: 'green' })
      : (color = { color: 'red' })
    return color
  }

  return (
    <tr>
      <td
        className='player-name'
        onClick={() => {
          props.setPlayerId(playerId)
        }}
      >
        {player.firstName} {player.lastName}
      </td>
      <td align='center'>
        <input
          onClick={e => handleSale(e)}
          className='sell-btn'
          type='submit'
          value='SELL'
          name='selling'
          form='sell_form'
        />
      </td>
      <td align='center'>
        <input
          onChange={e => trackQty(e.target.value)}
          max='100'
          type='number'
          form='sell_form'
          name='selling'
          value={qty}
          className='sell-input'
        />
      </td>
      <td align='center'>£ {(qty * player.sell).toFixed(2)}</td>
      <td style={profitLoss()} align='center'>
        £ {(qty * player.sell - qty * boughtPrice).toFixed(2)}
      </td>
      <td align='center'>{qtyOwned}</td>
      <td align='center'>£ {boughtPrice.toFixed(2)}</td>
      <td align='center'>£ {player.sell.toFixed(2)}</td>
      <td style={priceChange()} align='center'>
        £ {(player.sell - boughtPrice).toFixed(2)}
      </td>
    </tr>
  )
}

export default OwnedPlayerCard
