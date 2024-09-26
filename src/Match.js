// Match Table (Table-3)

import React, { useState } from 'react';
import './Match.css';
// import { Link } from'react-router-dom';

const Match = () => {
  const [team1Score, setTeam1Score] = useState({ runs: 30, wickets: 1 });
  const [team2Score, setTeam2Score] = useState({ runs: 20, wickets: 2 });
  const [player1Runs, setPlayer1Runs] = useState(0);
  const [player2Runs, setPlayer2Runs] = useState(0);
  const [bowlerStats, setBowlerStats] = useState({ runs: 0, wickets: 0 });

  return (
    <div >
    <div className="scoreboard-container" >
    
      <br></br>
      <br></br>
      <h2>Prodian Premier League</h2>
      <div className="teams-scores">
        <div className="team-score">
          <h3>Team 1: Chennai Super Kings <br></br>{team1Score.runs}/{team1Score.wickets}</h3>
        </div>
        <div className="team-score">
          <h3>Team 2: Royal Challengers Bangalore <br></br>{team2Score.runs}/{team2Score.wickets}</h3>
        </div>
      </div>

      <div className="players-stats">
        <div>
          <p>Player 1 Runs: {player1Runs}</p>
          <p>Player 2 Runs: {player2Runs}</p>
        </div>
        <div>
          <p>Bowler Runs: {bowlerStats.runs}</p>
          <p>Bowler Wickets: {bowlerStats.wickets}</p>
        </div>
      </div>

      <div className="controls">
        <button onClick={() => setPlayer1Runs(player1Runs + 1)}>+1 Run (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 1)}>+1 Run (P2)</button>
        <button onClick={() => setPlayer1Runs(player1Runs + 2)}>+2 Run (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 2)}>+2 Run (P2)</button>
        <button onClick={() => setPlayer1Runs(player1Runs + 3)}>+3 Run (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 3)}>+3 Run (P2)</button>
        <button onClick={() => setPlayer1Runs(player1Runs + 4)}>+4 Run (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 4)}>+4 Run (P2)</button>
        <button onClick={() => setPlayer1Runs(player1Runs + 6)}>+6 Run (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 6)}>+6 Run (P2)</button>
        <button onClick={() => setPlayer1Runs(player1Runs + 1)}>+1 Wide ball (P1)</button>
        <button onClick={() => setPlayer2Runs(player2Runs + 1)}>+1 Wide ball (P2)</button>
        <button onClick={() => setBowlerStats({ ...bowlerStats, runs: bowlerStats.runs + 1 })}>+1 Bowler Run</button>
        <button onClick={() => setTeam1Score({ ...team1Score, wickets: team1Score.wickets + 1 })}>+1 Wicket</button>
      </div>

      <div className="balls-info">
        <p>Total Balls - Remaining Balls</p>
      </div>

      <button className="end-innings-button">End Innings</button>
    </div>
    </div>
  );
};

export default Match;