import React, { useState, useEffect } from 'react';
import './featureslider.css'; // Your CSS file for styling
import speedIcon from '../assets/speed.jpg';
import supportIcon from '../assets/support.jpg';
import noInterruptions from '../assets/nointerruptions.jpg';

const FeatureSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
      const features = [speedIcon, supportIcon, noInterruptions];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % features.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, [features.length]);

    return (
        <div className="feature-slider">
            <div className="feature-slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {features.map((imgSrc, index) => (
                    <div className="feature" key={index}>
                        <img src={imgSrc}  alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSlider;