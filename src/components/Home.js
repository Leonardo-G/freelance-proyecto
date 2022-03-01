import React from 'react';

import "./Header.scss";
import logo from "../assets/logo.svg";
import mano from "../assets/mano.svg";
import hola from "../assets/hola.svg";
import { Tecnologias } from './Tecnologias';
import { Integraciones } from './Integraciones';

export const Home = () => {
    return (
        <div className='container'>
            <section>
                <nav className='navegacion'>
                    <a href='#proyecto' className='enlace'>Proyecto</a>
                    <a href='#tecnologia' className='enlace'>Tecnologías</a>
                    <a href='#contacto' className='enlace'>Contacto</a>
                </nav>
                <div className='header'>
                    <img src={ logo } alt="logo"/>
                    <div className='header__info'>
                        <div className='info-saludo'>
                            <img className='saludo-hola' src={ hola } alt="text hola"/>
                            <img className='header__mano' src={ mano } alt="mano saludo"/>
                        </div>
                        <p className='info-texto'>Programador Backend, orientado a servicios web, mobile, TÓTEM y APIs.</p>
                    </div>
                </div>
            </section>
            <Tecnologias />
            <Integraciones />
        </div>
    )
}
