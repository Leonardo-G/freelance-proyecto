import { useEffect, useRef } from "react";
import { Footer } from "../footer/Footer";
import { Form } from "../formulario/Form";
import { HeaderLayout } from "../UI/HeaderLayout";

import mobile from "../../assets/menu/desarrollo-mobile.png";

import Boom from "../../assets/boom.png";
import boom_responsive from "../../assets/mobile-responsive.png";

import ios from "../../assets/mobile/ios.jpg";
import android from "../../assets/mobile/android.png";
import flutter from "../../assets/mobile/flutter-icon.png";

import "./Mobile.scss";

export default function Mobile() {

  
  const UIanimacion = useRef(null);

  const observerCallback = (entries, observer) => {
      if(entries[0].isIntersecting){
          entries[0].target.classList.add("true");
          observer.disconnect()
      }
  }

  const options = {
      threshold: .5
  }
  
  useEffect(() => {
      const observer = new IntersectionObserver( observerCallback, options );

      UIanimacion.current = document.querySelector(".mobile-logos");
      observer.observe(UIanimacion.current);

      //eslint-disable-next-line
  }, [])

    return (
      <>
          <div className="container">
              <HeaderLayout 
                  imgLayout={ mobile }
                  altImg="Desarrollo de mobile"
              />
              <h1 className="titulo titulo-proyectos">Proyectos</h1>
              <div className="mobile">
                <div className="mobile__img">
                  <img src={boom_responsive} alt="boom-mobile" className="boom-responsive" />
                  <img src={Boom} alt="boom-mobile" className="boom" />
                </div>
                <div className="p-mobile">
                    <p>
                      Actualmente trabajo en el desarrollo de una App de Tablet y otra de
                      mobile.
                    </p>
                    <p>
                      <span>Boom</span> es una App mobile de pubs y restaurantes.
                    </p>
                    <p>
                      Boom te facilita la compra de bebidas ¡sin la necesidad de esperar a
                      ser atendido!
                    </p>
                    <p className="p-span"> ¡Demosle vida a tu idea!</p>
                </div>
                  <section className="mobile-logos">
                      <img className="android" src={ android } alt="logo de android"/>    
                      <img className="ios" src={ ios } alt="logo de ios"/>    
                      <img className="flutter" src={ flutter } alt="logo de flutter"/>    
                  </section>
              </div> 
          </div>
          <Form />
          <Footer />
      </>

    );
}
