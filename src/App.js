import React, { useEffect } from 'react'
import { withRouter, Route } from 'react-router-dom'
import './App.css'
import API from './adapters/API'

import Header from './containers/Header'
import MainLiveContainer from './containers/MainLiveContainer'
import Portfolio from './containers/Portfolio'
import SignUp from './containers/SignUp'

import LogIn from './components/LogIn'

import useToggle from './hooks/useToggle'
import useUserDetails from './hooks/useUserDetails'
import useOwnedPlayers from './hooks/useOwnedPlayers'

const App = props => {
  const { toggle, handleToggle } = useToggle()
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

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      API.validateUser().then(userData => {
        if (userData.error) throw userData.error

        validateData(userData)
      })
    }
  })

  const validateData = userData => {
    setUserId(userData.id)
    setUsername(userData.username)
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

  return (
    <div className='grid-box'>
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
          <MainLiveContainer {...routerProps} userId={userId} />
        )}
      />

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
          />
        )}
      />

      <Route
        exact
        path='/signup'
        render={routerProps => <SignUp {...routerProps} />}
      />
    </div>
  )
}

export default withRouter(App)
