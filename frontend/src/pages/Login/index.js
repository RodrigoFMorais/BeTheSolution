import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logo from '../../assets/Logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const history = useHistory();

  const data = {
    email,
    password,
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', data);

      localStorage.setItem('UserName', response.data.name);
      localStorage.setItem('UserEmail', email);
      localStorage.setItem('UserPasswd', password);
      localStorage.setItem('UserId', response.data.userid);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login! Tente novamente!');
    }
  }

  return (
    <div className="logon-container">
      <div>
        <h1 className="Titulo">Be The Solution </h1>
        <section className="form">
          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>

            <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input placeholder="Senha" type="password" value={password} onChange={(e) => setPasswd(e.target.value)} />

            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register" style={{ color: '#E74C3C' }}>
              <FiLogIn size={16} color="#1B57CB" />
              Não tenho cadastro
            </Link>

            <h3>Exponha sua solução para os problemas comunitários e veja se sua idéia possui aceitação.</h3>
          </form>
        </section>
      </div>
      <img src={logo} alt="Solution" />
    </div>
  );
}
