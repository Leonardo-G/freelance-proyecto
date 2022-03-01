import React, { useEffect, useRef, useState } from 'react';

import "./Integracion.scss";

import mer_libre from "../assets/integraciones/mercado-libre.png";
import mer_pago from "../assets/integraciones/mercado-pago.png";
import pedidos_ya from "../assets/integraciones/pedidos-ya.jpg";
import bamboo from "../assets/integraciones/bamboo.png";
import openstreetmap from "../assets/integraciones/openstreetmap.png";
import google_maps from "../assets/integraciones/google_maps.png";

export const Integraciones = () => {
    const UIanimacion = useRef(null);

    const observerCallback = (entries, observer) => {
        if(entries[0].isIntersecting){
            entries[0].target.classList.add("true");
        }
    }

    const options = {
        threshold: .5
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver( observerCallback, options );

        UIanimacion.current = document.querySelector(".integracion");
        observer.observe(UIanimacion.current);

    }, [])


    return (
        <section>
            <h2 className='titulo'>Integraciones con</h2>
            <div className='integracion'>
                <img className='mer_libre animacion_1' src={ mer_libre } alt="logo mercado libre"/>
                <img className='mer_pago animacion_2' src={ mer_pago } alt="logo mercado pago"/>
                <img className='pedidos_ya animacion_3' src={ pedidos_ya } alt="logo Pedidos Ya"/>
                <img className='bamboo animacion_4' src={ bamboo } alt="logo bamboo payment systems"/>
                <img className='openstreetmap animacion_5 ' src={ openstreetmap } alt="logo open street map"/>
                <img className='google_maps animacion_6' src={ google_maps } alt="logo open street map"/>
            </div>
        </section>
    )
}
