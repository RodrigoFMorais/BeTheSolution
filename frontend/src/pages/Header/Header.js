import React from 'react';
import './styles.css';
import smalllogo from '../../assets/SmallLogo.png';

export default function Header() {
    return (
        <header ClassName="ImageHeader">
            <h1> Be The Solution</h1>
            <img src={smalllogo} alt="Solution" />
        </header>
    );
}