import React, { useEffect } from 'react'
import { withRouter, Route } from 'react-router-dom'
import './App.css'
import API from './adapters/API'

import Header from './containers/Header'
import MainLiveContainer from './containers/MainLiveContainer'
import Portfolio from './containers/Portfolio'
import SignUp from './containers/SignUp'
import ValuableTradesContainer from './containers/ValuableTradesContainer'
import StandingsContainer from './containers/StandingsContainer'

import LogIn from './components/LogIn'
import HistoricalPriceChart from './components/HistoricalPriceChart'

import useToggle from './hooks/useToggle'
import useUserDetails from './hooks/useUserDetails'
import useOwnedPlayers from './hooks/useOwnedPlayers'
import useGetHistoricalPrice from './hooks/useGetHistoricalPrice'
import useMousePosition from './hooks/useMousePosition'

const App = props => {
  const { toggle, handleToggle, handleGraphToggle, graphToggle } = useToggle()

  const { x, y } = useMousePosition()

  const {
    ownedPlayers,
    getUserId,
    updateOwnedPlayersFromAPI
  } = useOwnedPlayers()

  const {
    userId,
    setUserId,
    username,
    setUsername,
    accountBalance,
    setAccountBalance
  } = useUserDetails()

  const { historicalData, setPlayerId } = useGetHistoricalPrice()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      API.validateUser().then(userData => {
        if (userData.error) throw userData.error

        validateData(userData)
      })
    }
  }, [])

  const signUpLogin = userData => {
    setUserId(userData.id)
    setUsername(
      userData.username.charAt(0).toUpperCase() + userData.username.slice(1)
    )
    setAccountBalance(userData.account_balance)
    getUserId(userData.id)

    localStorage.setItem('token', userData.token)
    props.history.push('/')
  }

  const validateData = userData => {
    setUserId(userData.id)
    setUsername(
      userData.username.charAt(0).toUpperCase() + userData.username.slice(1)
    )
    setAccountBalance(userData.account_balance)
    getUserId(userData.id)
  }

  const logout = () => {
    setUserId(null)
    setUsername('')
    setAccountBalance(null)
    getUserId(null)
    localStorage.removeItem('token')
  }

  let position = {
    left: x,
    top: y,
    position: 'absolute',
    zIndex: 999
  }

  return (
    <div
      onClick={e => {
        handleGraphToggle(e)
      }}
      className='grid-box'
    >
      <Header
        logInToggle={handleToggle}
        userId={userId}
        username={username}
        accountBalance={accountBalance}
        logout={logout}
      />
      {toggle && (
        <LogIn
          setUserId={setUserId}
          setUsername={setUsername}
          setBalance={setAccountBalance}
          logInToggle={handleToggle}
          getUserId={getUserId}
        />
      )}
      <Route
        exact
        path='/'
        render={routerProps => (
          <MainLiveContainer
            {...routerProps}
            userId={userId}
            setAccountBalance={setAccountBalance}
            updateOwnedPlayers={updateOwnedPlayersFromAPI}
            setPlayerId={setPlayerId}
          />
        )}
      />

      <Route
        exact
        path='/'
        render={routerProps => <StandingsContainer {...routerProps} />}
      />

      <Route
        exact
        path='/'
        render={routerProps => <ValuableTradesContainer {...routerProps} />}
      />

      {graphToggle && (
        <Route
          exact
          path='/'
          render={routerProps => (
            <div style={position}>
              <HistoricalPriceChart
                {...routerProps}
                historicalData={historicalData}
              />
            </div>
          )}
        />
      )}

      <Route
        exact
        path='/my-portfolio'
        render={routerProps => (
          <Portfolio
            {...routerProps}
            ownedPlayers={ownedPlayers}
            userId={userId}
            updateOwnedPlayersFromAPI={updateOwnedPlayersFromAPI}
            setAccountBalance={setAccountBalance}
            history={props.history}
            positionStyle={position}
            historicalData={historicalData}
            setPlayerId={setPlayerId}
            graphToggle={graphToggle}
          />
        )}
      />

      <Route
        exact
        path='/signup'
        render={routerProps => (
          <SignUp {...routerProps} signUpLogin={signUpLogin} userId={userId} />
        )}
      />
    </div>
  )
}

export default withRouter(App)
