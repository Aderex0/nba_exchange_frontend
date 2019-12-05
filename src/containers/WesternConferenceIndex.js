import React from 'react'
import TeamStandingsCard from '../components/TeamStandingsCard'
import '../css/Standings.css'

const WesternConferenceIndex = props => {
  return (
    <div className='western-conference-box'>
      <table>
        <tr>
          <th scope='col' />
          <th scope='col' />
          <th scope='col'>Team</th>
          <th scope='col'>GP</th>
          <th scope='col'>W</th>
          <th scope='col'>L</th>
          <th scope='col'>Str.</th>
        </tr>
        {props.teamStandings.map(
          team =>
            team.conference === 'west' && (
              <TeamStandingsCard key={team.teamId} team={team} />
            )
        )}
      </table>
    </div>
  )
}

export default WesternConferenceIndex
