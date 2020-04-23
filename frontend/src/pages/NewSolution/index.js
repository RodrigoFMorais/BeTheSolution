import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import api from '../../services/api';
import logo from '../../assets/Logo.png';


export default function NewSoltuion() {
  const [titulo, setTitulo] = useState('');
  const [problemaDescricao, setProblemaDescricao] = useState('');
  const [problemaSolucao, setProblemaSolucao] = useState('');

  const userId = localStorage.getItem('UserId');

  const history = useHistory();

  async function handleNewSolution(e) {
    e.preventDefault();

    const data = {
      titulo,
      problemaDescricao,
      problemaSolucao,
      userId
    }

    try {
      
      const response = await api.post('solucoes', data, {
        headers: {
          Authorization: userId,
        }
      });

      alert(`Solução cadastrada com sucesso. O id da solução é: ${response.data.id}`);
      
      history.push('/profile');
    
    } catch (err) {
      alert('Erro ao gravar solução, tente novamente!')
    }

  }

  return (<div className="newsolution-container">
  <div className="content">
    <section>
        {/* <h1 className="Titulo">Be The Solution </h1>  */}
        <img className="FigureRegister" src={logo} alt="Solution" />
        <h1>Cadastro nova solução</h1>
        <p>Descreva um problema público de sua localidade e a solução que está propondo.</p>

        <Link className="back-link" to="/profile" style={{color : '#E74C3C'}}>
            <FiArrowLeft size={16} color="#1B57CB"/>
            Voltar para home
        </Link> 
    </section>

    <form onSubmit={handleNewSolution}>

      <input 
          placeholder="Título do Problema" type="text"
          value={titulo}
          onChange={e=>setTitulo(e.target.value)}
      />
      
      <textarea 
          placeholder="Descrição do Problema" type="text"
          value={problemaDescricao}
          onChange={e=>setProblemaDescricao(e.target.value)}
      />
      
      <textarea 
          placeholder="Sua solução" type="text" 
          value={problemaSolucao}
          onChange={e=>setProblemaSolucao(e.target.value)}
      />


      <button className="button" type="submit">Cadastrar</button>
    </form>
  </div>
</div>
);
}