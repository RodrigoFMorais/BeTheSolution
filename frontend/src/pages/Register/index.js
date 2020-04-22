import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import logo from '../../assets/Logo.png';

export default function(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [dnasc, setDataNascimento] = useState('');
  const [city, setCidade] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, 
      passwd, 
      email, 
      city, 
      uf, 
      dnasc
    };

    try {
      const response = await api.post('register', data);

      alert(`Seu ID de acesso: ${response.data.userid}`);

      history.push('/');
      
    } catch(err) {
      alert("Erro ao realizar o cadastro! Tente novamente!");
    }
  }

  return (
    <div className="registro-container">
      <div className="content">
        <section>
            {/* <h1 className="Titulo">Be The Solution </h1>  */}
            <img className="FigureRegister" src={logo} alt="Solution" />
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e compartilhe sua solução.</p>
  
            <Link className="back-link" to="/" style={{color : '#E74C3C'}}>
                <FiArrowLeft size={16} color="#1B57CB"/>
                Já tenho cadastro
            </Link> 
        </section>
  
        <form onSubmit={handleRegister}>

          <input 
            placeholder="Nome" type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <input 
            placeholder="Email" type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <input 
            placeholder="Senha" type="password"
            value={passwd}
            onChange={e=>setPasswd(e.target.value)}
          />
          <input 
            placeholder="Data de Nascimento" type="date"
            value={dnasc}
            onChange={e=>setDataNascimento(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e=>setCidade(e.target.value)}
            />
            <input 
              placeholder="UF"  style={{width: 80}} 
              value={uf}
              onChange={e=>setUF(e.target.value)}
            />
          </div>


          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}