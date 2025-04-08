import React from "react";
import "./pricecard.css";

const PriceCard = ({ plan }) => {
    return (
        <div className="price-card">
            <h3 className="price">{plan.price}</h3>
            <p className="speed">{plan.speed} Mbps</p>
            <ul className="benefits">
                {plan.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
            <button className="select-btn">
                <span>Elegi tu plan</span>
            </button>
        </div>
    );
};

export default PriceCard;