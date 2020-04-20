import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

import smalllogo from '../../assets/SmallLogo.png';
import './styles.css';


export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={smalllogo} alt="BeTheSolution" />
        <span>Seja bem vindo, Rodrigo</span>

        <Link className="button1" to="/newsolution">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Soluções cadastradas</h1>

      <ul>
        <li>
          <strong> Problema: </strong>
          <p>bla bla bla.</p>
          <strong> Descrição: </strong>
          <p>bla bla bla bla bla .</p>
          <strong> Solução: </strong>
          <p>bla bla bla bla bla dsfasdfasdf.</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>

          <button className="like" type="button">
            <FiThumbsUp size={20} color="#a8a8b3"/>
          </button>

          <button className="deslike" type="button">
            <FiThumbsDown size={20} color="#a8a8b3"/>
          </button>

        </li>

        <li>
          <strong> Problema: </strong>
          <p>bla bla bla.</p>
          <strong> Descrição: </strong>
          <p>bla bla bla bla bla .</p>
          <strong> Solução: </strong>
          <p>bla bla bla bla bla .</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>

          <button className="like" type="button">
            <FiThumbsUp size={20} color="#a8a8b3"/>
          </button>

          <button className="deslike" type="button">
            <FiThumbsDown size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong> Problema: </strong>
          <p>bla bla bla.</p>
          <strong> Descrição: </strong>
          <p>bla bla bla bla bla .</p>
          <strong> Solução: </strong>
          <p>bla bla bla bla bla .</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>

          <button className="like" type="button">
            <FiThumbsUp size={20} color="#a8a8b3"/>
          </button>

          <button className="deslike" type="button">
            <FiThumbsDown size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong> Problema: </strong>
          <p>bla bla bla.</p>
          <strong> Descrição: </strong>
          <p>bla bla bla bla bla .</p>
          <strong> Solução: </strong>
          <p>bla bla bla bla bla .</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>

          <button className="like" type="button">
            <FiThumbsUp size={20} color="#a8a8b3"/>
          </button>

          <button className="deslike" type="button">
            <FiThumbsDown size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong> Problema: </strong>
          <p>bla bla bla.</p>
          <strong> Descrição: </strong>
          <p>bla bla bla bla bla .</p>
          <strong> Solução: </strong>
          <p>bla bla bla bla bla .</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>

          <button className="like" type="button">
            <FiThumbsUp size={20} color="#a8a8b3"/>
          </button>

          <button className="deslike" type="button">
            <FiThumbsDown size={20} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  );
}