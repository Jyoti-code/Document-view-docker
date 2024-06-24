import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          {token && <Route path="/home" element={<Home />} />}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
