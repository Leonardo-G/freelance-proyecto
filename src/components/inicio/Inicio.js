import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.svg";
import btn_bottom from "../../assets/btn-bottom.png";

import "./Inicio.scss";

export const Inicio = ({ handleInicioOff }) => { 

    useEffect(() => {
        document.querySelector(".inicio__flex img").classList.add("img-activo");
        document.querySelector(".titulo-inicio").classList.add("titulo-inicio-activo")
    }, [])

    return (
        <section className='inicio'>
            <div className='container'>
                <div className='inicio__flex'>
                    <img src={ logo } alt="logo edwin piston"/>
                    <h1 className='titulo-inicio'>Edwin Piston</h1>
                </div>
            </div>
            <div
                onClick={ handleInicioOff }
                className='inicio__btn' 
            >
                <img className='btn-img' src={ btn_bottom } alt="flecha indicativo hacia abajo"/>
            </div>
        </section>
    )
}
