import React from "react";
import "./about.css";
import FeatureSlider from "./featureslider.js";

const About = () => {
  return (
      <div className="about-container">
          <hr className="about-divider" />
          <div className="about-content">
              <div className="about-text">
                  <h2>Nosotros</h2>
                  <p>
                  Fibracol es un proveedor líder de internet de fibra óptica de alta velocidad, 
                  dedicado a brindar conectividad fluida y un servicio excelente a hogares y empresas.
                  Con tecnología de vanguardia y un enfoque centrado en el cliente, nos esforzamos por 
                  mantenerte conectado sin interrupciones.
                  </p>
              </div>
              <div className="feature-slider-wrapper">
                 <FeatureSlider />
              </div>
          </div>
        </div>
      
  );
};

export default About;