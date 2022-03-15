import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import mobile from "../../assets/menu/desarrollo-mobile.png";
import api from "../../assets/menu/api.png";
import web from "../../assets/menu/desarrollo-web.png";
import totem from "../../assets/menu/totem.png";

import "./Proyectos.scss";

export const Proyectos = () => {
    
    return (
        <div>
            <h1 className="titulo">Proyectos</h1>
            <div className="menu-pro">
                <Link to="/web" className="link-pro">
                    <img src={ web } alt="desarrollo web páginas web"/>
                </Link>
                <Link to="/mobile" className="link-pro">
                    <img src={ mobile } alt="desarrollo mobile"/>
                </Link>
                <Link to="/totem" className="link-pro">
                    <img src={ totem } alt="Creacoón de Totem"/>
                </Link>
                <Link to="/api" className="link-pro">
                    <img src={ api } alt="Creacoón de Api"/>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}
