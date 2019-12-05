import React, { useEffect, useState } from 'react'
import '../css/PriceJumps.css'

const PriceJumpsCard = props => {
  const { firstName, lastName, change } = props.trade
  const [colorC, setColorC] = useState('black')

  useEffect(() => {
    const interval = setInterval(() => {
      setColorC('white')
      setTimeout(function () {
        setColorC('black')
      }, 200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const setPriceClassName = () => {
    let className
    props.activeTab === 1
      ? (className = 'valuable-price')
      : props.activeTab === 2
        ? (className = 'un-valuable-price')
        : (className = 'bought-players')
    return className
  }

  const setNameClass = () => {
    let className
    props.activeTab === 1
      ? (className = 'valuable-player-name')
      : props.activeTab === 2
        ? (className = 'un-valuable-player-name')
        : (className = 'bought-players-name')
    return className
  }

  return (
    <tr>
      <td align='left' className={setNameClass()}>
        <p>
          {firstName} {lastName}
        </p>
      </td>
      <td align='center' className={setPriceClassName()}>
        <div>
          <p style={{ color: colorC }}>{change}</p>
        </div>
      </td>
    </tr>
  )
}

export default PriceJumpsCard
