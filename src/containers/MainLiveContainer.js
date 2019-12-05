import React, { useState, useEffect } from 'react'
import '../css/MainLiveContainer.css'

import PlayerIndex from './PlayerIndex'
import Tab from '../components/Tab'
import ScoreIndex from './ScoreIndex'

const MainLiveContainer = props => {
  const [activeTab, setActiveTab] = useState(1)

  const tabColor = { color: 'rgb(23, 64, 139)', backgroundColor: 'white' }

  return (
    <div className='main-live-container'>
      <div className='tab-area'>
        {activeTab === 1 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(1)}>
            Scores
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(1)}>Scores</Tab>
        )}
        {activeTab === 2 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(2)}>
            Player Index
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(2)}>PlayerIndex</Tab>
        )}
      </div>
      {activeTab === 2 && (
        <PlayerIndex
          userId={props.userId}
          setAccountBalance={props.setAccountBalance}
          updateOwnedPlayers={props.updateOwnedPlayers}
          setPlayerId={props.setPlayerId}
        />
      )}
      {activeTab == 1 && <ScoreIndex />}
    </div>
  )
}

export default MainLiveContainer
