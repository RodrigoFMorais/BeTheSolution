import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logo from '../../assets/Logo.png';


export default function NewSoltuion() {
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

    <form>

      <input placeholder="Título do Problema" type="text"/>
      <textarea placeholder="Descrição do Problema" type="text"/>
      <textarea placeholder="Sua solução" type="text" />

      <button className="button" type="submit">Cadastrar</button>
    </form>
  </div>
</div>
);
}