import React, { useEffect, useState } from 'react';

import { Tecnologias } from './tecnologia/Tecnologias';
import { Integraciones } from './integracion/Integraciones';
import { Form } from './formulario/Form';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Inicio } from './inicio/Inicio';
import { Proyectos } from './proyectos/Proyectos';

import "./Home.scss";

export const Home = () => {

    const inicioValor = JSON.parse(sessionStorage.getItem("inicioValor"));

    const [inicioDisponible, setInicioDisponible] = useState(inicioValor);
    const [inicio, setInicio] = useState(inicioValor)

    const handleInicioOff = () => {
        setInicioDisponible(true);
        setTimeout(() => {
            sessionStorage.setItem("inicioValor", JSON.stringify(true));
        }, 1200);
    }

    useEffect(() => {
        if(inicioDisponible){
            if(document.querySelector(".inicio")){
                document.querySelector(".inicio").classList.add("desaparecer");
            }
        }
    }, [inicioDisponible])
    
    return (
        <> 
            {
                !inicio &&
                <Inicio handleInicioOff={ handleInicioOff }/>
            }
            {
                inicioDisponible &&
                <>
                    <div className="home">
                        <div className='container'>
                            <Header />
                            <Proyectos />
                            <Tecnologias />
                            <Integraciones />
                        </div>
                        <Form />
                        <Footer />
                    </div>
                </>
            }
        </>
    )
}
