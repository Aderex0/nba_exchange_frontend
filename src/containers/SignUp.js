import React from 'react'

const SignUp = () => {
  return (
    <form className='signup-form'>
      <label>
        First Name
        <input type='text' name='signup' />
      </label>
      <label>
        Last Name
        <input type='text' name='signup' />
      </label>
      <label>
        Date of Birth
        <input type='date' name='signup' />
      </label>
      <label>
        Username
        <input type='text' name='signup' />
      </label>
      <label>
        Email
        <input type='text' name='signup' />
      </label>
      <label>
        Password
        <input type='password' name='signup' />
      </label>
    </form>
  )
}
export default SignUp
