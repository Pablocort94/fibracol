import React from "react";
import "./pricing.css";
import PriceCard from "./pricecard";

const plans = [
    {
        price: "$29.99/Mes",
        speed: 100,
        benefits: ["Unlimited Data", "24/7 Support", "No Throttling"],
    },
    {
        price: "$49.99/Mes",
        speed: 500,
        benefits: ["Higher Speed", "Priority Support", "Instalacion Gratis"],
    },
    {
        price: "$79.99/Mes",
        speed: 1000,
        benefits: ["Ultra-Fast Speed", "Dedicated Support", "Router Included"],
    },
];

const Pricing = () => {
    return (
        <div className="pricing-container">
            <hr className="price-divider" />
            <h2>Planes</h2>
            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <PriceCard key={index} plan={plan} />
                ))}           
            </div>
            <div className="pricing-con">
            {/* Pen icon should be before the SVG in the DOM so it sits "on top" visually */}
            <svg className="pen-transition" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* White background first */}
                <path fill="#C0C0C0" d="M0,0 L1440,0 L1440,150 L0,150 Z" />

                

                {/* Blue wave on top */}
                <path
                    fill="#1a1f71"
                    d="M0,0 C400,200 1040,-50 1440,150 L1440,0 L0,0 Z"
                    transform="scale(1.002, 1)"
                    
                />
            </svg>
            {/* Pen icon should be before the SVG in the DOM so it sits "on top" visually */}
            <svg className="pen-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <path d="M20.7 7.3l-4-4a1 1 0 00-1.4 0L2 16v6h6L20.7 8.7a1 1 0 000-1.4zM8.4 20H4v-4.4l9-9 4.4 4.4-9 9zm10.6-10.6l-2.4 2.4-4.4-4.4 2.4-2.4 4.4 4.4z"/>
            </svg> 
            </div>    
                            
        </div>
    );
};

export default Pricing;
