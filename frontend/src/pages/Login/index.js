import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


import './styles.css';
import logo from '../../assets/Logo.png';


export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <h1 className="Titulo">Be The Solution </h1> 

                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Email" />

                    <input placeholder="Senha" />
                    
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/registro">
                        <FiLogIn size={16} color="#1B57CB"/>
                        Não tenho cadastro
                    </Link>

                    <h3>Exponha sua solução para os problemas comunitários e veja se sua idéia possui aceitação.</h3>
                </form>
            </section>

            <img src={logo} alt="Solution" />
        </div>
    );
}