import React from 'react'
import '../css/ScoreIndex.css'

const ScoreCard = props => {
  const {
    vTeamLogo,
    statusGame,
    vTeamFullName,
    vPoints,
    vQ1Score,
    vQ2Score,
    vQ3Score,
    vQ4Score,
    hTeamLogo,
    hTeamFullName,
    hPoints,
    hQ1Score,
    hQ2Score,
    hQ3Score,
    hQ4Score
  } = props.game

  return (
    <div className='matchup-card'>
      <div className='vTeam-logo'>
        <img src={vTeamLogo} />
        <p>{vTeamFullName}</p>
      </div>
      <div className='vTeam-score'>
        <h1>{vPoints}</h1>
      </div>
      <div className='line-score-container'>
        <div className='live'>
          <p>{statusGame}</p>
        </div>
        <div className='vQ1'>{vQ1Score}</div>
        <div className='vQ2'>{vQ2Score}</div>
        <div className='vQ3'>{vQ3Score}</div>
        <div className='vQ4'>{vQ4Score}</div>
        <div className='q1'>Q1</div>
        <div className='q2'>Q2</div>
        <div className='q3'>Q3</div>
        <div className='q4'>Q4</div>
        <div className='hQ1'>{hQ1Score}</div>
        <div className='hQ2'>{hQ2Score}</div>
        <div className='hQ3'>{hQ3Score}</div>
        <div className='hQ4'>{hQ4Score}</div>
      </div>
      <div className='hTeam-score'>
        <h1>{hPoints}</h1>
      </div>
      <div className='hTeam-logo'>
        <img src={hTeamLogo} />
        <p>{hTeamFullName}</p>
      </div>
    </div>
  )
}

export default ScoreCard

{
  /* <div className='team-logos'>
        <div className='hTeam-logo'>
          <img src={hTeamLogo} />
          <p>{hTeamFullName}</p>
        </div>
        <div className='vTeam-logo'>
          <img src={vTeamLogo} />
          <p>{vTeamFullName}</p>
        </div>
      </div>
      <div className='scoreline-container'>
        <div className='hTeam-scoreline-box' />
        <div className='vTeam-scoreline-box' />
      </div>
      <div className='score-box'>
        <div className='hTeam-score'>{hPoints}</div>
        <div className='vTeam-score'>{vPoints}</div>
      </div> */
}
