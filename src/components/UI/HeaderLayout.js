import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import logo from "../../assets/logo-ep.png";
import fondo from "../../assets/rectangulo-header.png";

import "./HeaderLayout.scss";

export const HeaderLayout = ({ imgLayout, altImg }) => {
    
    const handleReady = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        handleReady()
    }, [])

    return (
        <header id="layout">
            <div className="fondo-menu"><img src={ fondo } alt="fondo img"/></div>
            <div className="menu-layout">
                <Link to="/">
                    <img src={ logo } alt="logo Edwin Piston" />
                </Link>
                <a className='layout-enlace' href="#contacto">Contacto</a>
            </div>
            <div className="layout-img"><img src={ imgLayout } alt={ altImg }/></div>
        </header>
    )
}
