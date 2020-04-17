import React from 'react';

import './styles.css';
import Header from '../Header/Header';

export default function(){
  return (
    <div className="registro-container">
        <Header />
        <form>

        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Senha" />
        <input placeholder="Data de Nascimento" />
        <input placeholder="Cidade" />
        <input placeholder="Estado" />

        <button className="button" type="submit">Entrar</button>
        </form>

    </div>
  );
}