import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/logo.svg";
import btn_bottom from "../assets/btn-bottom.png";

import "./Inicio.scss";

export const Inicio = () => {
    return (
        <section className='inicio'>
            <div className='container'>
                <div className='inicio__flex'>
                    <img src={ logo } alt="logo edwin piston"/>
                    <h1 className='titulo-inicio'>Edwin Piston</h1>
                </div>
            </div>
            <Link 
                className='inicio__btn' 
                to="/"
            >
                <img className='btn-img' src={ btn_bottom } alt="flecha indicativo hacia abajo"/>
            </Link>
        </section>
    )
}
