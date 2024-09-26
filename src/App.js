import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Create from './Create';
import Players from './Players';
import Match from './Match';

function App() {
    return (
        <div className="App">
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Create />}> </Route>
         <Route path="/Players" element={<Players />}> </Route>
         <Route path="/Match" element={<Match />}> </Route>
         </Routes>
         </BrowserRouter>
       
       </div>
        
    );
}

export default App;
