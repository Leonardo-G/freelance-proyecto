import React, { useEffect, useState } from 'react';
import { Tecnologia } from './Tecnologia';

import btn_left from "../assets/arrow-left-circle.svg";
import btn_right from "../assets/arrow-right-circle.svg";

import ide1 from "../assets/ides/android-studio.svg";
import ide2 from "../assets/ides/ide2.svg";
import ide3 from "../assets/ides/eclipse.svg";
import ide4 from "../assets/ides/vsc.svg";
import ide5 from "../assets/ides/ij-ide.svg";

import lenguaje1 from "../assets/lenguajes/c.png";
import lenguaje2 from "../assets/lenguajes/c++.png";
import lenguaje3 from "../assets/lenguajes/ce.png";
import lenguaje4 from "../assets/lenguajes/java.png";
import lenguaje5 from "../assets/lenguajes/phyton.png";
import lenguaje6 from "../assets/lenguajes/php.png";
import lenguaje7 from "../assets/lenguajes/ts.png";
import lenguaje8 from "../assets/lenguajes/javascript.png";

import framework1 from "../assets/framworks/codeigniter.png";
import framework2 from "../assets/framworks/dj.png";
import framework3 from "../assets/framworks/react.png";
import framework4 from "../assets/framworks/net.png";
import framework5 from "../assets/framworks/laravel.png";
import framework6 from "../assets/framworks/angular.png";

import mobile1 from "../assets/frameworks-mobiles/flutter.png";
import mobile2 from "../assets/frameworks-mobiles/xamarin.png";

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
        { tipo: "lenguaje", src: lenguaje1, alt: "lenguaje c" },
        { tipo: "lenguaje", src: lenguaje2, alt: "lenguaje c++" },
        { tipo: "lenguaje", src: lenguaje3, alt: "lenguaje c#" },
        { tipo: "lenguaje", src: lenguaje4, alt: "lenguaje java" },
        { tipo: "lenguaje", src: lenguaje5, alt: "lenguaje phyton" },
        { tipo: "lenguaje", src: lenguaje6, alt: "lenguaje php" },
        { tipo: "lenguaje", src: lenguaje7, alt: "lenguaje ts" },
        { tipo: "lenguaje", src: lenguaje8, alt: "lenguaje javascript" },
    ],
    [
        { tipo: "framework", src: framework1, alt: "framework CodeIgniter" },
        { tipo: "framework", src: framework2, alt: "framework dj" },
        { tipo: "framework", src: framework3, alt: "framework react" },
        { tipo: "framework", src: framework4, alt: "framework asp.net" },
        { tipo: "framework", src: framework5, alt: "framework laravel" },
        { tipo: "framework", src: framework6, alt: "framework angular" },
    ],
    [
        { tipo: "mobile", src: mobile1, alt: "mobile Flutter" },
        { tipo: "mobile", src: mobile2, alt: "mobile Xamarin" }
    ],
]

const tipos = ["IDE", "Lenguajes de programación", "Frameworks", "Frameworks mobile"]

export const Tecnologias = () => {
    
    const [anchoVentana, setAnchoVentana] = useState(null)
    const [numeroArray, setNumeroArray] = useState(1);
    const [tipoActual, setTipoActual] = useState(tipos[0])
 
    window.addEventListener("resize", () => {
        //Ancho de ventana.
        const ancho = document.querySelector(".caja__flex").offsetWidth;
        if( ancho >= 1100 ){
            setAnchoVentana( null );
            return;
        }
        if( ancho < 1100){
            setAnchoVentana(ancho)
        }
    })

    useEffect(() => {
        const tipoSeleccionado = tipos.filter( (tipo, idx) => (idx + 1) === numeroArray )[0]
        
        setTipoActual(tipoSeleccionado)
        
        //Ancho de ventana.
        const ancho = document.querySelector(".caja__flex").offsetWidth;
        if( ancho < 1100){
            setAnchoVentana(ancho)
            console.log(ancho)
        }
    }, [numeroArray])

    const handleClickLeft = () => {

        const ref = document.querySelector(".flex-contenedor");
        const idx = ref.children.length - 1;
        const ultimoElemento = ref.children[idx];

        ref.insertBefore(ultimoElemento, ref.firstChild);

        ref.style.transition = "none"
        ref.style.transform = `translateX(-${ref.firstElementChild.offsetWidth}px)`
        
        setTimeout(() => {
            ref.style.transition = ".3s all ease-out"
            ref.style.transform = "translateX(0px)"

            if( numeroArray === 1 ){
                setNumeroArray(tipos.length);
                return;
            }

            setNumeroArray( numeroArray - 1 );
        }, 30);
        
    } 

    const handleClickRight = () => {

        const ref = document.querySelector(".flex-contenedor");
        console.log(ref);

        ref.style.transform = `translateX(-${ref.firstElementChild.offsetWidth}px)`
        ref.style.transition = "0.3s all ease-out"
        
        ref.addEventListener("transitionend", handleFinTransicion)
        
        if( numeroArray >= Number(tipos.length) ){
            setNumeroArray(1);
            return
        }

        setNumeroArray( numeroArray + 1)
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
        <section id='tecnologia' className='tecnologias'>
            <h2 className='titulo'>Tecnologías que uso</h2>
            <div className='caja'>
                <div className='caja__borde'>
                    <p>{ tipoActual }</p>
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
                                <Tecnologia key={ idx } anchoVentana={ anchoVentana } tecnologia={ tecnologia }/>
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
