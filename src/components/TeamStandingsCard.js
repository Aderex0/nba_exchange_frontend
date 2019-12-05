import React from 'react'
import '../css/Standings.css'

const TeamStandingsCard = props => {
  const {
    shortName,
    teamName,
    gamesPlayed,
    loss,
    win,
    rank,
    winStreak,
    teamLogo
  } = props.team

  return (
    <tr>
      <td>{rank}.</td>
      <td>
        <img className='standings-logo' src={teamLogo} />
      </td>
      <td>
        {shortName} {teamName}
      </td>
      <td align='center'>{gamesPlayed}</td>
      <td align='center'>{win}</td>
      <td align='center'>{loss}</td>
      <td align='center'>{winStreak}</td>
    </tr>
  )
}

export default TeamStandingsCard
