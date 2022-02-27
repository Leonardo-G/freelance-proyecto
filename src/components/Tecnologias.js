import React, { useEffect, useState } from 'react';

import btn_left from "../assets/arrow-left-circle.svg";
import btn_right from "../assets/arrow-right-circle.svg";

import ide1 from "../assets/ides/android-studio.svg";
import ide2 from "../assets/ides/ide2.svg";
import ide3 from "../assets/ides/eclipse.svg";
import ide4 from "../assets/ides/vsc.svg";
import ide5 from "../assets/ides/ij-ide.svg";

import "./Tecnologias.scss";
import { Tecnologia } from './Tecnologia';

const tecnologiasArray = [
    { tipo: "IDE", src: ide1, alt: "ide1" },
    { tipo: "IDE", src: ide2, alt: "ide2" },
    { tipo: "IDE", src: ide3, alt: "ide3" },
    { tipo: "IDE", src: ide4, alt: "ide4" },
    { tipo: "IDE", src: ide5, alt: "ide5" }
]

export const Tecnologias = () => {

    const [tecnologias, setTecnologias] = useState(tecnologiasArray)

    // useEffect( () => {

    // }, [])

    return (
        <section className='tecnologias'>
            <h2 className='titulo'>Tecnologías que uso</h2>
            <div className='caja'>
                <div className='caja__borde'>
                    <p>IDE</p>
                </div>
                <div className='caja__btn-left'>
                    <img src={ btn_left } alt="boton izquierdo"/>
                </div>
                <div className='caja__iconos'>
                    {
                        tecnologias.map( (tecnologia, idx) => (
                            <Tecnologia key={ idx } { ...tecnologia }/>
                        ))
                    }
                </div>
                <div className='caja__btn-right'>
                    <img src={ btn_right } alt="boton derecho"/>
                </div>
            </div>
        </section>
    )
}
