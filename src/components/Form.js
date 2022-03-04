import React, { useState } from 'react';

import "../assets/mundo.png";

import "./Form.scss";

import videoForm from "../assets/correoenviado.mp4"

export const Form = () => {

    const [error, setError] = useState({
        error: false,
        msg: ""
    })

    const [inputsValues, setInputsValues] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
    })

    const enviarCorreo = async (e) => {

        e.preventDefault();


        const bloque1 = document.querySelector("#bloque1");
        const bloque2 = document.querySelector("#bloque2");
        const bloque3 = document.querySelector("#bloque3");
        const bloque4 = document.querySelector("#bloque4");

        bloque1.style.display = "none";
        bloque2.style.display = "inherit"

        setTimeout(() => {
            bloque3.classList.add("fondo-activo")
        }, 30);

        setTimeout(() => {
            bloque4.style.display = "block"
        }, 1000);

        // try {
        //     const respuesta = await fetch( "https://api.emailjs.com/api/v1.0/email/send", {
        //         method: "POST",
        //         headers: {
        //             'accept': 'application/json',
        //             'Content-Type': 'application/json' 
        //         },
        //         body: JSON.stringify({
        //             user_id: 'sNZC8cZLNgcdtUgUm',
        //             service_id: 'service_b3nir69',
        //             template_id: 'template_er5jifs'
        //         }),
        //     })
        
        //     console.log(await respuesta.text())
            
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const handleReady = () => {

        const bloque3 = document.querySelector("#bloque3");
        const bloque4 = document.querySelector("#bloque4");
        const bloque5 = document.querySelector("#bloque5");
        const bloque6 = document.querySelector("#bloque6");

        bloque3.classList.remove("fondo-activo");
        bloque4.style.display = "none";
        bloque5.style.display = "none";
        bloque6.style.display = "flex"
    }

    return (
        <section className='contacto'>
            <h2 className='titulo'>Contacto</h2>
            <p className='titulo-contacto'>¡Trabajemos juntos!</p>
            <p className='titulo-contacto'>Desde cualquier parte del mundo</p>
            <div id="bloque1" className='contacto__fondo'>
                <form 
                    className='formulario'
                    onSubmit={ enviarCorreo }
                >
                    <input 
                        type="text"
                        placeholder='Nombre'
                        name='nombre'
                    />
                    <input 
                        type="email"
                        placeholder='Email'
                        name='correo'
                    />
                    <input 
                        type="text"
                        placeholder='Asunto'
                        name='asunto'
                    />
                    <textarea
                        placeholder='Tú mensaje...'
                        name='mensaje'
                    ></textarea>
                    <input 
                        className='btn btn-submit'
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </div>
            <div id='bloque2' className='contacto__enviado'>
                <div id="bloque4" className='enviado-video'>
                    <video src={ videoForm }
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
                <div id="bloque3" className='enviado-fondo'>
                    <div id='bloque5' className='enviado-contenedor'>
                        <h3 className='activo-titulo'>¡Tu mensaje ha sido enviado!</h3>
                        <div 
                            className='btn'
                            onClick={ handleReady }    
                        >Aceptar</div>
                    </div>
                    <div id='bloque6' className='enviado-info'>
                        <div className='info-container'>
                            <p>A la brevedad te estaré contactando.</p>
                        </div>
                        <p className='info-texto'>¡Muchas gracias!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
