import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Bem-vindo à Plataforma</h1>
      <p>Escolha uma opção para continuar:</p>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register" style={{ marginLeft: '10px' }}>
        <button>Cadastro</button>
      </Link>
    </div>
  );
};

export default Home;
