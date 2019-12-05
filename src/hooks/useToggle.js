import { useState } from 'react'

const useToggle = () => {
  const [toggle, setToggle] = useState(false)
  const [graphToggle, setGraphToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)
  const handleGraphToggle = e => {
    if (e.nativeEvent.target.className === 'player-name') {
      setGraphToggle(true)
    } else {
      setGraphToggle(false)
    }
  }

  return { toggle, handleToggle, graphToggle, handleGraphToggle }
}

export default useToggle
