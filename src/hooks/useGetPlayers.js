import { useState, useEffect } from 'react'
import API from '../adapters/API'

const useGetPlayers = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    API.getPlayers().then(setPlayers)
  }, [])

  return { players, setPlayers }
}

export default useGetPlayers
