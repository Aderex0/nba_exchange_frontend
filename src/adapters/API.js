const BASE_URL = 'http://localhost:3000'
const PLAYERS = `${BASE_URL}/players`
const USER_LOGIN = `${BASE_URL}/login`
const USER_VALIDATION = `${BASE_URL}/validate`
const BUY_PLAYER = `${BASE_URL}/buy_player`
const OWNED_PLAYERS = `${BASE_URL}/owned_players`
const SELL_PLAYER = `${BASE_URL}/sell_player`

// Configuration Object for POST, PATCH, DELETE
const configObj = (data, method) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }
}

// *#*#*#*-- GET REQUESTS --*#*#*#* \\

// get list of players
const getPlayers = () => fetch(PLAYERS).then(resp => resp.json())

// get list of owned players
const getOwnedPlayers = userId =>
  fetch(OWNED_PLAYERS, { headers: { user: userId } }).then(resp => resp.json())

// validate user
const validateUser = () =>
  fetch(USER_VALIDATION, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())

// *#*#*#*-- POST REQUESTS --*#*#*#* \\

// login user
const loginUser = loginDetails =>
  fetch(USER_LOGIN, configObj(loginDetails, 'POST')).then(resp => resp.json())

// buy players
const buyPlayer = purchaseDetails =>
  fetch(BUY_PLAYER, configObj(purchaseDetails, 'POST'))

// sell players
const sellPlayer = saleDetails =>
  fetch(SELL_PLAYER, configObj(saleDetails, 'POST')).then(resp => resp.json())

export default {
  getPlayers,
  loginUser,
  validateUser,
  buyPlayer,
  getOwnedPlayers,
  sellPlayer
}
