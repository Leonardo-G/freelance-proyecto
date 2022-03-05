import React from 'react';

import { Tecnologias } from './Tecnologias';
import { Integraciones } from './Integraciones';


import "./Home.scss";
import { Form } from './Form';
import { Footer } from './Footer';
import { Header } from './Header';

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
