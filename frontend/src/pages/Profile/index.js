import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

import api from '../../services/api';
import smalllogo from '../../assets/SmallLogo.png';
import './styles.css';

export default function Profile() {
  const [solucoes, setSolucoes] = useState([]);

  const name = localStorage.getItem('UserName');
  const userId = localStorage.getItem('UserId');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization:  userId
      }
    }).then(responses => {
       setSolucoes(responses.data);
    })
  }, [userId]);

  async function handleDeleSolucao(id) {
    try {
      await api.delete(`solucoes/${id}`,{
        headers: {
          Authorization: userId
        }
      });
      setSolucoes(solucoes.filter(solucao => solucao.id !== id));

    } catch (err) {
        alert('Erro ao deletar caso, tente novamente!')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={smalllogo} alt="BeTheSolution" />
        <span>Seja bem vindo, {name}</span>

        <Link className="button" to="/newsolution">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Soluções cadastradas</h1>

      <ul>
      {solucoes.map(solucao => (
                  <li key={solucao.id}>
                    <strong> Problema: </strong>
                    <p>{solucao.titulo}</p>
                    <strong> Descrição: </strong>
                    <p>{solucao.problemaDescricao}</p>
                    <strong> Solução: </strong>
                    <p>{solucao.problemaSolucao}</p>
          
                    <button  onClick={()=> {handleDeleSolucao(solucao.id)}} type="button">
                      <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
          
                    <button className="like" type="button">
                      <FiThumbsUp size={20} color="#a8a8b3"/>
                    </button>
          
                    <button className="deslike" type="button">
                      <FiThumbsDown size={20} color="#a8a8b3"/>
                    </button>
          
                </li>
        ))}
      </ul>
    </div>
  );
}