import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Create from './Create';
import Players from './Players';
import Match from './Match';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Create Match</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/match">Match</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Create />} />
                <Route path="players" element={<Players />} />
                <Route path="match" element={<Match />} />
            </Routes>
        </>
    );
}

export default App;
