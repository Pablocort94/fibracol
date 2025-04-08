import React from "react";
import "./landingpage.css";
/*me gsta este efecto para botones*//*https://ibelick.com/blog/creating-metallic-effect-with-css*/
/*hacer un hero slider para los beneficios que estan en el classname de features, despues meter el widget de conexion*/
const LandingPage = ({ scrollToSection, pricingRef }) => {
    return (
      <div className="landing-container">
        <div className="hero-content">
          <h1>Fibracol</h1>
          <h2>Tu conexion al futuro, sin interrupciones</h2>
          <p>Confiable. Accesible. Velocidades ultrarrápidas con soporte al cliente 24/7. 🚀💡</p>
          <button onClick={() => scrollToSection(pricingRef)} className="cta-button">
            <span>Elegi tu plan</span>
          </button>
        </div>  
      </div>
    );
  };
  
  export default LandingPage;