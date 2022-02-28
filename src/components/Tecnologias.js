import React, { useEffect, useRef, useState } from 'react';
import { Tecnologia } from './Tecnologia';

import btn_left from "../assets/arrow-left-circle.svg";
import btn_right from "../assets/arrow-right-circle.svg";

import ide1 from "../assets/ides/android-studio.svg";
import ide2 from "../assets/ides/ide2.svg";
import ide3 from "../assets/ides/eclipse.svg";
import ide4 from "../assets/ides/vsc.svg";
import ide5 from "../assets/ides/ij-ide.svg";

import lenguaje1 from "../assets/lenguajes/c.png";

import "./Tecnologias.scss";

const tecnologiasArray = [
    [
        { tipo: "IDE", src: ide1, alt: "ide1" },
        { tipo: "IDE", src: ide2, alt: "ide2" },
        { tipo: "IDE", src: ide3, alt: "ide3" },
        { tipo: "IDE", src: ide4, alt: "ide4" },
        { tipo: "IDE", src: ide5, alt: "ide5" },
    ],
    [
        { tipo: "lenguaje", src: lenguaje1, alt: "lenguaje1" },
    ],
    [
        { tipo: "lenguaje2", src: lenguaje1, alt: "lenguaje1" },
        { tipo: "lenguaje2", src: ide5, alt: "ide5" },
    ],
]

export const Tecnologias = () => {

    const handleClickLeft = () => {
        const ref = document.querySelector(".flex-contenedor");
        const idx = ref.children.length - 1;
        const ultimoElemento = ref.children[idx];

        ref.insertBefore(ultimoElemento, ref.firstChild);

        ref.style.transition = "none"
        ref.style.transform = "translateX(-1050px)"
        
        setTimeout(() => {
            ref.style.transition = "0.3s all ease-out"
            ref.style.transform = "translateX(0px)"
        }, 30);
        
    } 

    const handleClickRight = () => {
        const ref = document.querySelector(".flex-contenedor");
        console.log(ref);

        ref.style.transform = "translateX(-1050px)"
        ref.style.transition = "0.3s all ease-out"

        // ref.firstElementChild.remove()
        
        ref.addEventListener("transitionend", handleFinTransicion)
    }

    const handleFinTransicion = () => {
        const ref = document.querySelector(".flex-contenedor");
        
        ref.style.transition = "none"
        ref.style.transform = "translateX(0px)"

        const img = ref.firstElementChild
        ref.appendChild(img);
        ref.removeEventListener("transitionend", handleFinTransicion)
    }

    return (
        <section className='tecnologias'>
            <h2 className='titulo'>Tecnologías que uso</h2>
            <div className='caja'>
                <div className='caja__borde'>
                    <p>IDE</p>
                </div>
                <div 
                    className='caja__btn-left'
                    onClick={ handleClickLeft } 
                    aria-label="Previous"   
                >
                    <img src={ btn_left } alt="boton izquierdo"/>
                </div>
                <div className='caja__flex'>
                    <div className='flex-contenedor'>
                        {
                            tecnologiasArray.map( (tecnologia, idx) => (
                                <Tecnologia key={ idx } tecnologia={ tecnologia }/>
                            ))
                        }
                    </div>
                </div>
                <div 
                    className='caja__btn-right'
                    onClick={ handleClickRight } 
                    aria-label="Next"   
                >
                    <img src={ btn_right } alt="boton derecho"/>
                </div>
            </div>
        </section>
    )
}
