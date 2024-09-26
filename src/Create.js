import React, { useState } from 'react';
import './Create.css';
import { Link, Outlet } from 'react-router-dom';

function Create() {
  const Teams = ['Team A ', 'Team B'];

  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [isTeam1Saved, setIsTeam1Saved] = useState(false);
  const [isTeam2Saved, setIsTeam2Saved] = useState(false);

  const handleTeam1Select = (e) => {
    setTeam1(e.target.value);
  };

  const handleTeam2Select = (e) => {
    setTeam2(e.target.value);
  };

  const saveTeam1 = () => {
    if (team1 !== '') {
      setIsTeam1Saved(true);
    }
  };

  const saveTeam2 = () => {
    if (team2 !== '') {
      setIsTeam2Saved(true);
    }
  };

  const proceed = () => {
    if (isTeam1Saved && isTeam2Saved) {
      alert(`Proceeding with Team 1: ${team1} and Team 2: ${team2}`);
    } else {
      alert('Please select and save both teams.');
    }
  };

  return (
    <div className="App">
      <h1>Create Match</h1>
      <h2>Prodian Premier League</h2>
      <p>"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do."</p>
      
      <div>
        <ul className="image-list">
          <li><img src="/Chennai_Super_Kings_Logo.svg.png" alt="Chennai Super Kings" /></li>
          <li><img src="/download.jpeg" alt="Team Logo" /></li>
          <li><img src="/download.png" alt="Team Logo" /></li>
        </ul>
      </div>
      
      <div className="team-section">
        <h3>Team 1</h3>
        <select onChange={handleTeam1Select} value={team1} disabled={isTeam1Saved}> 
          <option value="" disabled>Select Team 1</option>
          {Teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
        <button onClick={saveTeam1} disabled={isTeam1Saved}>Save</button>
      </div>

      <div className="team-section">
        <h3>Team 2</h3>
        <select onChange={handleTeam2Select} value={team2} disabled={isTeam2Saved}>
          <option value="" disabled>Select Team 2</option>
          {Teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
        <button onClick={saveTeam2} disabled={isTeam2Saved}>Save</button>
      </div>

      <button onClick={proceed} className="proceed-btn">Proceed</button>
      <Outlet />
    </div>
  );
}

export default Create;
