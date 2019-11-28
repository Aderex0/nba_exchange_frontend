import React from 'react'
import '../css/LogIn.css'
import API from '../adapters/API'

import useLogIn from '../hooks/useLogIn'

const LogIn = ({
  setUserId,
  getUserId,
  logInToggle,
  setUsername,
  setBalance
}) => {
  const { username, password, trackUsername, trackPassword } = useLogIn()

  const handleLogIn = (loginDetails, event) => {
    event.preventDefault()
    API.loginUser(loginDetails).then(userData => {
      if (userData.error) throw Error(userData.error)

      login(userData)
    })
  }

  const login = userData => {
    setUserId(userData.id)
    setUsername(userData.username)
    setBalance(userData.account_balance)
    getUserId(userData.id)
    logInToggle(false)

    localStorage.setItem('token', userData.token)
  }

  return (
    <div className='login-box'>
      <form
        className='login-form'
        onSubmit={event => handleLogIn({ username, password }, event)}
      >
        <input
          onChange={e => trackUsername(e.target.value)}
          className='username'
          name='username'
          type='text'
          value={username}
        />
        <input
          onChange={e => trackPassword(e.target.value)}
          className='password'
          name='password'
          type='password'
          value={password}
        />
        <input className='login-btn' type='submit' value='Log In' />
        <button className='cancel-btn'>Cancel</button>
      </form>
    </div>
  )
}

export default LogIn
