import React from 'react';

import logo from "../assets/logo.svg";
import btn_bottom from "../assets/btn-bottom.png";

import "./Inicio.scss";
import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <section className='inicio'>
            <div className='container'>
                <div className='inicio__flex'>
                    <img src={ logo } alt="logo edwin piston"/>
                    <h1 className='titulo-inicio'>Edwin Piston</h1>
                </div>
            </div>
            <Link to="/">
                <img className='inicio__btn' src={ btn_bottom } alt="boton de indicacion hacia abajo"/>
            </Link>
        </section>
    )
}
