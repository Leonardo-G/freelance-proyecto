import totem from "../../assets/totem.png";
import check from "../../assets/check.png";
import { Form } from "../formulario/Form";
import { Footer } from "../footer/Footer";
import { HeaderLayout } from "../UI/HeaderLayout";

import totem_header from "../../assets/menu/totem.png";
import oval from "../../assets/oval.png";

import "./Totem.scss"

export default function Totem() {
    return (
        <>
            <div className="container">
              <HeaderLayout 
                  imgLayout={ totem_header }
                  altImg="totem"
              />
              <h1 className="titulo titulo-proyectos">Proyectos</h1>
              <p className="description">
                Creación de TOTEM interactivo, integrando servicios de usuario como de
                encuestas, solicitudes o sistemas publicitarios.
              </p>
              <div className="totem-img">
                  <img src={totem} alt="totem" className="totem" />
              </div>
              <div className="info-api">
                  <h3 className="heading">Beneficios de TOTEM</h3>
                  <img className="oval" src={ oval } alt="imagen oval"/>
              </div>
                  <div className="totem-list">
                      <div className="list">
                          <img className="list-img" src={ check } alt="imagen check"/>
                          <div className="list-info">
                              <p>
                                  Vertical: La disposición de forma vertical favorece la
                                  comunicación y la integración de mensajes de rápida lectura.{" "}
                              </p>
                          </div>
                      </div>
                      <div className="list">
                          <img className="list-img" src={ check } alt="imagen check"/>
                          <div className="list-info">
                              <p>
                                  Presencia: los mensajes tienen un marco que los hace destacar.
                              </p>
                          </div>
                      </div>
                      <div className="list">
                          <img className="list-img" src={ check } alt="imagen check"/>
                          <div className="list-info">
                              <p>
                                  Comodidad: los contenidos se reproducen de manera automática, lo
                                  que ahorra tiempo a los comerciantes.{" "}
                              </p>
                          </div>
                      </div>
                      <div className="list">
                          <img className="list-img" src={ check } alt="imagen check"/>
                          <div className="list-info">
                              <p>
                                  Branding: los tótems permiten incorporar tu logotipo para
                                  asociarlo a los contenidos que emites y así brindar un mejor
                                  servicio entre empresa y cliente.{" "}
                              </p>
                          </div>
                      </div>
                  </div>
            </div>
            <Form />
            <Footer />
        </>
    );
}
