import React from 'react';

import logo from "../../assets/logo.svg";
import mano from "../../assets/mano.png";
import hola from "../../assets/hola.svg";

import menu from "../../assets/menu.svg";

import "./Header.scss";

export const Header = () => {

    const handleToggleMenu = () => {
        document.querySelector(".navegacion").classList.toggle("navegacion-activo")
        document.querySelector("body").classList.toggle("ov-hidden")
    }

    const handleCloseMenu = () => {
        const enlace = document.querySelector(".navegacion").classList;
        
        if(enlace.contains("navegacion-activo")){
            document.querySelector("body").classList.toggle("ov-hidden")
            enlace.remove("navegacion-activo")
        }
    }

    return (
        <section>
            <div 
                className='menu-btn'
                onClick={ handleToggleMenu }    
            >
                <div className='menu-btn-lineas'></div>    
            </div>
            <nav className='navegacion'>
                <img className='navegacion__logo' src={ logo } alt="logo edwin pistón"/>
                <a onClick={ handleCloseMenu } href='#proyecto' className='enlace'>Proyecto</a>
                <a onClick={ handleCloseMenu } href='#tecnologia' className='enlace'>Tecnologías</a>
                <a onClick={ handleCloseMenu } href='#contacto' className='enlace'>Contacto</a>
            </nav>
            <div className='header'>
                <img className='header__logo' src={ logo } alt="logo"/>
                <div className='header__info'>
                    <div className='info-saludo'>
                        <img className='saludo-hola' src={ hola } alt="text hola"/>
                        <img className='header__mano' src={ mano } alt="mano saludo"/>
                    </div>
                    <p className='info-texto'>Programador Backend, orientado a servicios web, mobile, TÓTEM y APIs.</p>
                </div>
            </div>
        </section>
    )
}
