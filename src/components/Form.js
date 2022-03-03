import React from 'react';

import "../assets/mundo.png";

import "./Form.scss";

export const Form = () => {
    const enviarCorreo = async (e) => {

        e.preventDefault();
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

    return (
        <section className='contacto'>
            <h2 className='titulo'>Contacto</h2>
            <p className='titulo-contacto'>¡Trabajemos juntos!</p>
            <p className='titulo-contacto'>Desde cualquier parte del mundo</p>
            <div className='contacto__fondo'>
                <form 
                    className='formulario'
                    onSubmit={ enviarCorreo }
                >
                    <input 
                        type="text"
                        placeholder='Nombre'
                    />
                    <input 
                        type="email"
                        placeholder='Email'
                    />
                    <input 
                        type="text"
                        placeholder='Asunto'
                    />
                    <textarea
                        placeholder='Tú mensaje...'
                    ></textarea>
                    <input 
                        className='btn-form'
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </div>
        </section>
    )
}
