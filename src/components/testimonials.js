import React from "react";
import "./testimonials.css";
import TestimonialCard from "./testimonialcard";


const testimonials = [
    {
        name: "Carlos Mendez",
        role: "CEO, TechWave",
        feedback: "Fibracol ha transformado por completo nuestro negocio. ¡Internet ultrarrápido y una atención al cliente excepcional!"
    },
    {
        name: "Sofia Ramos",
        role: "Freelance Designer",
        feedback: "¡Por fin puedo trabajar sin interrupciones! El mejor servicio que he tenido. ¡Lo recomiendo muchísimo!"
    },
    {
        name: "Daniel Torres",
        role: "Startup Founder",
        feedback: "Conexión confiable y ultrarrápida. Justo lo que nuestro equipo necesitaba para mantenerse productivo."
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">            
            <h2>Testimonios</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
            <div className="testimonials-transition">
            {/* Pen icon should be before the SVG in the DOM so it sits "on top" visually */}
            <svg className="testimony-transition" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* White background first */}
                <path fill="#1a1f71" d="M0,0 L1440,0 L1440,150 L0,150 Z" />

                {/* Blue wave on top */}
                <path
                    fill="#C0C0C0"
                    d="M0,0 C400,200 1040,-50 1440,150 L1440,0 L0,0 Z"
                />
            </svg>
            {/* Pen icon should be before the SVG in the DOM so it sits "on top" visually */}
            </div>             
        </div>

        
    );
};

export default Testimonials;