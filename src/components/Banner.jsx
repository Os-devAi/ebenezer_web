import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_one.jpg',
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_three.jpg',
        'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_two.jpg',
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Auto-slide cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning]);

    return (
        <section id="inicio" className="banner-section">
            <div className="banner-controls">
                <div className="slides-wrapper">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`slide-control ${index === currentIndex ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                        >
                            <img src={image} alt={`Masaje ${index + 1}`} />
                            <div className="slide-overlay">
                                <div className="slide-content">
                                    <h2>Bienvenido a Ebenezer</h2>
                                    <p>Tu centro de bienestar y relajación</p>
                                    <button className="cta-button">Reservar Cita</button>
                                </div>
                            </div>
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

                <div className="slide-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;