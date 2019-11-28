import React from 'react'
import '../css/MainLiveContainer.css'

import PlayerIndex from './PlayerIndex'
import Tab from '../components/Tab'

const MainLiveContainer = props => {
  return (
    <div className='main-live-container'>
      <div className='tab-area'>
        <Tab>Scores</Tab>
        <Tab>Player Index</Tab>
      </div>
      <PlayerIndex userId={props.userId} />
    </div>
  )
}

export default MainLiveContainer
