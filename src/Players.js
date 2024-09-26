/*       players Table (Table-2)  */

import React, { useState } from "react";
import "./Players.css";
import { Link } from "react-router-dom";

const Players = () => {
  const [team1Players, setTeam1Players] = useState([
    { name: "Sandhiya", selected: false , position : "Stricker"},
    { name: "Seetha", selected: false , position : "Stricker"},
    { name: "Sanjay", selected: false , position : "Stricker"},
    { name: "Shiva ", selected: false , position : "Stricker"},
    { name: "Sandy", selected: false , position : "Stricker"},
    { name: "Seethu", selected: false , position : "Non- Stricker"},
    { name: "Karthick", selected: false , position : "Non- Stricker"},
    { name: "Guru", selected: false , position : "Non- Stricker"},
    { name: "Root", selected: false , position : "Non- Stricker"},
    { name: "Messi", selected: false , position : "Non- Stricker"},
    { name: "Dhoni", selected: false , position : "Non- Stricker"},
  ]);

  const [team2Players, setTeam2Players] = useState([
    { name: "Subbu", selected: false , position:"Bowler"},
    { name: "jeeva", selected: false , position:"Bowler"},
    { name: "Akshaya", selected: false , position : "Bowler"},
    { name: "Parameshwaram", selected: false , position: "Bowler"},
    { name: "Raj", selected: false , position : "Bowler"},
    { name: "Joe", selected: false , position: "Bowler"},
    { name: "Jack", selected: false , position : "Bowler"},
    { name: "William", selected: false , position : "Bowler"},
    { name: "Ronaldo", selected: false , position : "Bowler"},
    { name: "Rohit", selected: false, position : "Bowler"},
    { name: "Pandya", selected: false ,position : "Bowler"},
  ]);

  const handleCheckboxChange = (team, index) => {
    if (team === "team1") {
      const updatedTeam1 = [...team1Players];
      updatedTeam1[index].selected = !updatedTeam1[index].selected;
      setTeam1Players(updatedTeam1);
    } else if (team === "team2") {
      const updatedTeam2 = [...team2Players];
      updatedTeam2[index].selected = !updatedTeam2[index].selected;
      setTeam2Players(updatedTeam2);
    }
  };

  const proceedToGame = () => {
    const selectedTeam1Players = team1Players.filter((player) => player.selected);
    const selectedTeam2Players = team2Players.filter((player) => player.selected);

    console.log("Selected Team 1 Players:", selectedTeam1Players);
    console.log("Selected Team 2 Players:", selectedTeam2Players);
    alert("Proceeding to game...Get ready to play" );
  };

  return (
    <div>
    <div className="container">
    {/* <Link to="/Players"> <Players /> </Link> */}
      <div className="team">
        <h3>Team 1 Players - Yet to bat First</h3>
        <div className="scroll-box">
          {team1Players.map((player, index) => (
            <div key={index} className="player">
              <input
                type="checkbox"
                checked={player.selected}
                onChange={() => handleCheckboxChange("team1", index)}
              />
              <label>{player.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="team">
        <h3>Team 2 Players - Yet to field first</h3>
        <div className="scroll-box">
          {team2Players.map((player, index) => (
            <div key={index} className="player">
              <input
                type="checkbox"
                checked={player.selected}
                onChange={() => handleCheckboxChange("team2", index)}
              />
              <label>{player.name}</label>
            </div>
          ))}
        </div>
      </div>
      <Link to="Match"> <button className="proceed-button" onClick={proceedToGame}>
        Proceed to Game
      </button></Link>
      
    </div>
    </div>
  );
};

export default Players;

