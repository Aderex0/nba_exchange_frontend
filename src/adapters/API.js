const BASE_URL = 'http://localhost:3000'
const PLAYERS = `${BASE_URL}/players`
const USER_LOGIN = `${BASE_URL}/login`
const USER_VALIDATION = `${BASE_URL}/validate`
const BUY_PLAYER = `${BASE_URL}/buy_player`
const OWNED_PLAYERS = `${BASE_URL}/owned_players`
const SELL_PLAYER = `${BASE_URL}/sell_player`
const NEW_USER = `${BASE_URL}/users`
const HISTORICAL_PRICES = `${BASE_URL}/get_historical_price`
const PRICE_JUMPS = `${BASE_URL}/get_price_jumps`
const STANDINGS = `${BASE_URL}/standings`
const GAME_DETAILS = `${BASE_URL}/game_details`

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

// get standings
const getStandings = () => fetch(STANDINGS).then(resp => resp.json())

// get list of top 5 price jumps
const getPriceJumps = () => fetch(PRICE_JUMPS).then(resp => resp.json())

// get list of owned players
const getOwnedPlayers = userId =>
  fetch(OWNED_PLAYERS, { headers: { user: userId } }).then(resp => resp.json())

// get historical price data for player
const getHistoricalPriceData = playerId =>
  fetch(HISTORICAL_PRICES, { headers: { player: playerId } }).then(resp =>
    resp.json()
  )

// get game details
const getGameDetails = () => fetch(GAME_DETAILS).then(resp => resp.json())

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
  fetch(BUY_PLAYER, configObj(purchaseDetails, 'POST')).then(resp =>
    resp.json()
  )

// sell players
const sellPlayer = saleDetails =>
  fetch(SELL_PLAYER, configObj(saleDetails, 'POST')).then(resp => resp.json())

// register new user
const signUpNewUser = newUserDetails =>
  fetch(NEW_USER, configObj(newUserDetails, 'POST')).then(resp => resp.json())

export default {
  getPlayers,
  loginUser,
  validateUser,
  buyPlayer,
  getOwnedPlayers,
  sellPlayer,
  signUpNewUser,
  getHistoricalPriceData,
  getPriceJumps,
  getStandings,
  getGameDetails
}
