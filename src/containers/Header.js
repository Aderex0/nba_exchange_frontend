import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

import HeaderButton from '../components/HeaderButton'

const Header = ({ logInToggle, userId, username, accountBalance, logout }) => {
  return (
    <div className='header-box'>
      <div className='logo-container'>
        <div className='logo' />
      </div>
      {userId ? (
        <>
          <Link to='/'>
            <HeaderButton area='home' border>
              Home
            </HeaderButton>
          </Link>
          <Link to='/my-portfolio'>
            <HeaderButton area='portfolio' border>
              Portfolio
            </HeaderButton>
          </Link>
          <HeaderButton area='signup' onClick={logout} border>
            Log Out
          </HeaderButton>
          <div className='quick-account-info'>
            <p>Welcome, {username}!</p>
            <p>Balance: £{accountBalance}</p>
          </div>
        </>
      ) : (
        <>
          <Link to='/signup'>
            <HeaderButton area='signup'>Sign up</HeaderButton>
          </Link>
          <HeaderButton area='login' onClick={logInToggle}>
            Login
          </HeaderButton>
        </>
      )}
    </div>
  )
}

export default Header
