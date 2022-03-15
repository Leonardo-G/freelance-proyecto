import React, { useEffect, useState } from 'react';
import { Tecnologia } from './Tecnologia';
import { tecnologiasArray } from '../../data/dataTecnologia';

import btn_left from "../../assets/arrow-left-circle.svg";
import btn_right from "../../assets/arrow-right-circle.svg";

import "./Tecnologias.scss";

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
                <div className='caja__borde animacion-borde'>
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
