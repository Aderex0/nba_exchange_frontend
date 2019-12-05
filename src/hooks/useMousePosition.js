import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY })
  }

  useEffect(() => {
    window.addEventListener('click', updateMousePosition)

    return () => window.removeEventListener('click', updateMousePosition)
  }, [])

  let x = mousePosition.x
  let y = mousePosition.y

  return { x, y }
}

export default useMousePosition
