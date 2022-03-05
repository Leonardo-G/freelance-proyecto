import React from 'react';

import "./Footer.scss";

import img from "../assets/redes/1.png";
import linkedin from "../assets/redes/linkedin.png";
import github from "../assets/redes/github.png";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__redes'>
                <a href='http://blog.edwinpiston.com/'>
                    <img src={ img } alt="red 1"/>
                </a>
                <a href='http://www.linkedin.com/in/edwinpiston'>
                    <img src={ linkedin } alt="linkedin"/>
                </a>
                <a href='https://github.com/EdwinpistonC/learning-tracking'>
                    <img src={ github } alt="github"/>
                </a>
            </div>
            <p className='footer__derechos'>© Todos los derechos reservados. </p>
            <div>
                <p>Edwin Pistón 2022</p>
                <p>Lucía Loayza | UX UI Designer</p>
                <p>Mayra Borda & Leo Guanuco | Programmers</p>
            </div>
        </footer>
    )
}
