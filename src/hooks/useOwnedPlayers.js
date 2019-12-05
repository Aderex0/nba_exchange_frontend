import { useState, useEffect } from 'react'
import API from '../adapters/API'

const useGetPlayers = () => {
  let [ownedPlayers, setOwnedPlayers] = useState([])
  let [userId, setUserId] = useState()

  let getUserId = id => setUserId(id)

  const updateOwnedPlayersFromAPI = () => {
    API.getOwnedPlayers(userId).then(setOwnedPlayers)
  }

  useEffect(updateOwnedPlayersFromAPI, [userId])

  return { ownedPlayers, getUserId, updateOwnedPlayersFromAPI }
}

export default useGetPlayers
