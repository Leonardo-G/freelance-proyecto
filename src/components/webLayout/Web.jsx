import React from "react";
import { Footer } from "../footer/Footer";
import { Form } from "../formulario/Form";
import { HeaderLayout } from "../UI/HeaderLayout";

import portfolios from "../../data/data";

import web from "../../assets/menu/desarrollo-web.png";

import "./Web.scss";

function Web({ webItem }) {
  
  return (
    <>
        <div className="container">
            <HeaderLayout 
                imgLayout={ web }
                altImg="Desarrollo de páginas web"
            />
            <h1 className="titulo titulo-proyectos">Proyectos</h1>
            <div className="portfolios">
                {portfolios.map((item) => {
                    return (
                        <div className={ `portfolio ${ item.clase }`} key={item.id}>
                            <img src={item.image} alt="imagen proyecto" />
                            <div className="portfolio__info">
                              <h3>{item.title}</h3>
                              <p className="description-p">{item.description}</p>
                              <button className="btn">
                                <a className="link" href={item.link}>
                                  {item.icon}
                                </a>
                              </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <Form />
        <Footer />
    </>
  );
}

export default Web;
