import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
  <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />} />
  <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

    </Router>
  );
};

export default App;
