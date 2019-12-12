import React from 'react'
import '../css/LogIn.css'
import API from '../adapters/API'
import { withRouter } from 'react-router-dom'

import useLogIn from '../hooks/useLogIn'

const LogIn = ({
  setUserId,
  getUserId,
  logInToggle,
  setUsername,
  setBalance,
  history
}) => {
  const { username, password, trackUsername, trackPassword } = useLogIn()

  const handleLogIn = e => {
    e.preventDefault()
    const loginDetails = {
      username: username.toLowerCase(),
      password: password
    }

    API.loginUser(loginDetails).then(userData => {
      if (userData.error) throw alert('Invalid Login Details')

      login(userData)
      history.push('/')
    })
  }

  const login = userData => {
    setUserId(userData.id)
    setUsername(
      userData.username.charAt(0).toUpperCase() + userData.username.slice(1)
    )
    setBalance(userData.account_balance)
    getUserId(userData.id)
    logInToggle(false)

    localStorage.setItem('token', userData.token)
  }

  return (
    <div className='login-box'>
      <form className='login-form' onSubmit={e => handleLogIn(e)}>
        <input
          onChange={e => trackUsername(e.target.value)}
          className='username'
          name='username'
          type='text'
          value={username}
          placeholder='username'
        />
        <input
          onChange={e => trackPassword(e.target.value)}
          className='password'
          name='password'
          type='password'
          value={password}
          placeholder='password'
        />
        <input className='login-btn' type='submit' value='Log In' />
        <button onClick={logInToggle} className='cancel-btn'>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default withRouter(LogIn)
