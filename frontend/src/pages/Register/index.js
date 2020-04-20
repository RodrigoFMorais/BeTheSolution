import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
//import Header from '../Header/Header'; */
import logo from '../../assets/Logo.png';

export default function(){
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
  
        <form>

          <input placeholder="Nome" type="text"/>
          <input placeholder="Email" type="email"/>
          <input placeholder="Senha" type="password" />
          <input placeholder="Data de Nascimento" type="date" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF"  style={{width: 80}} />
          </div>


          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}