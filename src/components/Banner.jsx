// Banner.jsx
import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_one.jpg',
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_three.jpg',
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_two.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="banner-controls">
            <div className="slides-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide-control ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button className="nav-btn prev-btn" onClick={prevSlide}>
                ‹
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
                ›
            </button>

            <div className="slide-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Banner;