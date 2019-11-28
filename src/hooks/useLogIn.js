import { useState } from 'react'

const useLogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const trackUsername = username => setUsername(username)
  const trackPassword = password => setPassword(password)

  return {
    username,
    password,
    trackUsername,
    trackPassword
  }
}

export default useLogIn
