import React, { useState, useEffect } from "react";
import "./Create.css";
import { Outlet, useNavigate } from "react-router-dom"; // Change here
import axios from "axios";

function Create() {
  const [teams, setTeams] = useState([]); 
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [isTeam1Saved, setIsTeam1Saved] = useState(false);
  const [isTeam2Saved, setIsTeam2Saved] = useState(false);
  
  const navigate = useNavigate(); // Change here

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://192.168.0.75:8080/teams/getAllTeams"); 
        setTeams(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
 
    fetchTeams();
  }, []);

  const handleTeam1Select = (e) => {
    setTeam1(e.target.value);
  };
 
  const handleTeam2Select = (e) => {
    setTeam2(e.target.value);
  };
 
  const saveTeam1 = () => {
    if (team1 !== "") {
      setIsTeam1Saved(true);
    }
  };
 
  const saveTeam2 = () => {
    if (team2 !== "") {
      setIsTeam2Saved(true);
    }
  };
 
  const proceed = async () => {
    if (isTeam1Saved && isTeam2Saved) {
      try {
        const matchData = {
          team1Id: team1,
          team2Id: team2,
        };
        const response = await axios.post(
          "http://192.168.0.75:8080/matches/createMatch",
          matchData
        ); 
        alert(`Match created with ID: ${response.data.matchId}`);
        navigate("/players"); // Change here
      } catch (error) {
        console.error("Error creating match:", error);
        alert("Failed to create match.");
      }
    } else {
      alert("Please select and save both teams.");
    }
  };
 
  return (
    <div className="App">
      <h1>Create Match</h1>
      <h2>Prodian Premier League</h2>
      <p>
        "Success is no accident. It is hard work, perseverance, learning,
        studying, sacrifice, and most of all, love of what you are doing or
        learning to do."
      </p>
 
      <div>
        <ul className="image-list">
          <li>
            <img
              src="/Chennai_Super_Kings_Logo.svg.png"
              alt="Chennai Super Kings"
            />
          </li>
          <li>
            <img src="/download.jpeg" alt="Team Logo" />
          </li>
          <li>
            <img src="/download.png" alt="Team Logo" />
          </li>
        </ul>
      </div>
 
      <div className="team-section">
        <h3>Team 1</h3>
        <select
          onChange={handleTeam1Select}
          value={team1}
          disabled={isTeam1Saved}
        >
          <option value="" disabled>
            Select Team 1
          </option>
          {teams.map((team) => (
            <option key={team.teamId} value={team.teamId}>
              {team.teamName}
            </option> 
          ))}
        </select>
        <button onClick={saveTeam1} disabled={isTeam1Saved}>
          Save
        </button>
      </div>
 
      <div className="team-section">
        <h3>Team 2</h3>
        <select
          onChange={handleTeam2Select}
          value={team2}
          disabled={isTeam2Saved}
        >
          <option value="" disabled>
            Select Team 2
          </option>
          {teams.map((team) => (
            <option key={team.teamId} value={team.teamId}>
              {team.teamName}
            </option>
          ))}
        </select>
        <button onClick={saveTeam2} disabled={isTeam2Saved}>
          Save
        </button>
      </div>
 
      <button onClick={proceed} className="proceed-btn">
        Proceed
      </button>
      <Outlet />
    </div>
  );
}

export default Create;
