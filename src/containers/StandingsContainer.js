import React, { useEffect, useState } from 'react'
import '../css/Standings.css'
import WesternConferenceIndex from '../containers/WesternConferenceIndex'
import EasternConferenceIndex from '../containers/EasternConferenceIndex'
import Tab from '../components/Tab'
import API from '../adapters/API'

const StandingsContainer = () => {
  const [teamStandings, setTeamStandings] = useState([])
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    API.getStandings().then(standingsData => {
      standingsData.sort((a, b) => {
        return a.rank - b.rank
      })
      setTeamStandings(standingsData)
    })
  }, [])

  const tabColor = { color: 'rgb(23, 64, 139)', backgroundColor: 'white' }

  return (
    <div className='standings-container'>
      <div className='tab-area-standings'>
        {activeTab === 1 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(1)}>
            Western Conf.
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(1)}>Western Conf.</Tab>
        )}
        {activeTab === 2 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(2)}>
            Eastern Conf.
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(2)}>Eastern Conf.</Tab>
        )}
      </div>
      {activeTab === 1 && (
        <WesternConferenceIndex teamStandings={teamStandings} />
      )}
      {activeTab === 2 && (
        <EasternConferenceIndex teamStandings={teamStandings} />
      )}
    </div>
  )
}

export default StandingsContainer
