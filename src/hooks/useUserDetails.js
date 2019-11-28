import { useState } from 'react'

const useLogIn = () => {
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState('')
  const [accountBalance, setAccountBalance] = useState(null)

  return {
    username,
    setUsername,
    accountBalance,
    setAccountBalance,
    userId,
    setUserId
  }
}

export default useLogIn
