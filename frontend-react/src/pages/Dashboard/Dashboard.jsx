import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h2>Área Logada</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
