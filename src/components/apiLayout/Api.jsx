import blog from "../../assets/blog.png";
import { Footer } from "../footer/Footer";
import { Form } from "../formulario/Form";
import { HeaderLayout } from "../UI/HeaderLayout";

import api from "../../assets/menu/api.png";
import oval from "../../assets/oval.png";
import check from "../../assets/check.png";

import "./Api.scss";

export default function Api() {
    return (
      <>
        <div className="container">
            <HeaderLayout 
                imgLayout={ api }
                altImg="api"
            />
            <h1 className="titulo titulo-proyectos">Proyectos</h1>
            
            <div className="info-api">
                <h3 className="heading">¿Qué es un servicio API?</h3>
                <img className="oval" src={ oval } alt="imagen oval"/>
            </div>
            <div className="description">
              <p>
                API, “Application Programming Interface” es la forma en que dos
                aplicaciones o servicios se comunican entre sí.
              </p>
              <p>
                {" "}
                Una API se encarga de procesar y proveer información a sitios webs o
                Mobile que consumen la API. Desde recibir información desde base de
                datos, autenticación de usuario, hasta manipulación, procesamiento y
                creación de archivos.
              </p>
            </div>
            <div className="info-api">
                <h3 className="heading">Beneficios de API</h3>
                <img className="oval" src={ oval } alt="imagen oval"/>
            </div>
            <div className="totem-list">
                <div className="list">
                    <img className="list-img" src={ check } alt="imagen check"/>
                    <div className="list-info">
                        <p>
                            Permiten la reutilización de código, reduciendo los tiempos y costes
                            asociados al desarrollo de aplicaciones.{" "}
                        </p>
                    </div>
                </div>
                <div className="list">
                    <img className="list-img" src={ check } alt="imagen check"/>
                    <div className="list-info">
                        <p>
                            Comunican de información entre sí, de una forma más rápida.
                        </p>
                    </div>
                </div>
            </div>
            <div className="api-img">
              <h4 className="titulo titulo-left">Recursos disponibles sobre API en </h4>
              <div className="blog">
                <a className="block-enlace" href="http://blog.edwinpiston.com/api" target="_blank" rel="noreferrer">
                  <img src={blog} alt="blog" />
                </a>
              </div>
            </div>
        </div>
        <Form />
        <Footer />
      </>
    );
}
