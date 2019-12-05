import React, { useEffect } from 'react'
import '../css/SignUp.css'
import API from '../adapters/API'
import useSignUp from '../hooks/useSignUp'
import { Link } from 'react-router-dom'

const SignUp = ({ signUpLogin, userId, history }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    dob,
    setDob
  } = useSignUp()

  useEffect(
    () => {
      if (userId) {
        history.push('/')
      }
    },
    [userId]
  )

  const handleRegistration = e => {
    debugger
    e.preventDefault()
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username.toLowerCase(),
      email: email,
      password: password,
      dob: dob,
      account_balance: 50.0
    }
    API.signUpNewUser(newUser).then(newUserData => {
      signUpLogin(newUserData)
    })
  }

  return (
    <div className='signup-container'>
      <div className='register-header'>
        <h1>Register</h1>
      </div>
      <form onSubmit={e => handleRegistration(e)} className='signup-form'>
        <label>
          <p>First Name</p>
          <input
            onChange={e => setFirstName(e.target.value)}
            type='text'
            name='signup'
          />
        </label>
        <label>
          <p>Last Name</p>
          <input
            onChange={e => setLastName(e.target.value)}
            type='text'
            name='signup'
          />
        </label>
        <label>
          <p>Date of Birth</p>
          <input
            onChange={e => setDob(e.target.value)}
            type='date'
            name='signup'
          />
        </label>
        <label>
          <p>Username</p>
          <input
            onChange={e => setUsername(e.target.value)}
            type='text'
            name='signup'
          />
        </label>
        <label>
          <p>Email</p>
          <input
            onChange={e => setEmail(e.target.value)}
            type='text'
            name='signup'
          />
        </label>
        <label>
          <p>Password</p>
          <input
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='signup'
          />
        </label>
        <label>
          <input name='signup' type='submit' value='Register' />
        </label>
        {/* <Link to='/'>
          <button>Cancel</button>
        </Link> */}
      </form>
    </div>
  )
}
export default SignUp
