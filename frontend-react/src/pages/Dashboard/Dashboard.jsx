import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    type: 'movie',
    title: '',
    authorOrDirector: '',
    genre: '',
    releaseYear: '',
    completed: false
  });

  const token = localStorage.getItem('token');

  const fetchItems = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/moviesbooks`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setItems(data);
    } catch (err) {
      toast.error('Erro ao carregar dados.');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/moviesbooks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        toast.success('Item criado!');
        setForm({ type: 'movie', title: '', authorOrDirector: '', genre: '', releaseYear: '', completed: false });
        fetchItems();
      } else {
        const data = await res.json();
        toast.error(data.message || 'Erro ao criar.');
      }
    } catch (err) {
      toast.error('Erro de rede.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/moviesbooks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Item removido.');
      fetchItems();
    } catch (err) {
      toast.error('Erro ao deletar.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Seus Filmes / Livros</h2>
      <button onClick={logout} style={{ marginBottom: 20 }}>Logout</button>

      <form onSubmit={handleCreate} style={{ marginBottom: 20 }}>
        <select value={form.type} onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}>
          <option value="movie">Filme</option>
          <option value="book">Livro</option>
        </select>
        <input
          placeholder="Título"
          value={form.title}
          onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
          required
        />
        <input
          placeholder="Autor/Diretor"
          value={form.authorOrDirector}
          onChange={e => setForm(prev => ({ ...prev, authorOrDirector: e.target.value }))}
        />
        <input
          placeholder="Gênero"
          value={form.genre}
          onChange={e => setForm(prev => ({ ...prev, genre: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Ano"
          value={form.releaseYear}
          onChange={e => setForm(prev => ({ ...prev, releaseYear: e.target.value }))}
        />
        <label>
          <input
            type="checkbox"
            checked={form.completed}
            onChange={e => setForm(prev => ({ ...prev, completed: e.target.checked }))}
          />
          Finalizado
        </label>
        <button type="submit">Criar</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.title}</strong> ({item.releaseYear}) — {item.type}
            <button onClick={() => handleDelete(item._id)} style={{ marginLeft: 10 }}>Remover</button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
