import React from 'react';

import { Tecnologias } from './tecnologia/Tecnologias';
import { Integraciones } from './integracion/Integraciones';


import "./Home.scss";
import { Form } from './formulario/Form';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Home = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <Tecnologias />
                <Integraciones />
            </div>
            <Form />
            <Footer />
        </>
    )
}
