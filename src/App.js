import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SplitFlapDisplay from './SplitFlapDisplay';
import ControlPanel from './ControlPanel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Display</Link> | <Link to="/control">Control Panel</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SplitFlapDisplay />} />
          <Route path="/control" element={<ControlPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;