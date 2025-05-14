import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        toast.success('Login realizado com sucesso!');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error(data.message || 'Credenciais inválidas.');
      }
    } catch (error) {
      toast.error('Erro de rede. Tente novamente.');
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={credentials.email}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <button type="submit">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
