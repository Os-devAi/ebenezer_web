import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Masaje Relajante",
            description: "Alivia el estrés y la tensión muscular con nuestras técnicas de relajación profunda.",
            icon: "💆‍♀️",
            duration: "60 min"
        },
        {
            id: 2,
            title: "Masaje Terapéutico",
            description: "Tratamiento especializado para lesiones musculares y problemas crónicos.",
            icon: "🩺",
            duration: "75 min"
        },
        {
            id: 3,
            title: "Masaje Deportivo",
            description: "Preparación y recuperación muscular para atletas y personas activas.",
            icon: "🏃‍♂️",
            duration: "90 min"
        },
        {
            id: 4,
            title: "Aromaterapia",
            description: "Combinación de masajes con aceites esenciales para mayor relajación.",
            icon: "🌸",
            duration: "60 min"
        }
    ];

    return (
        <section id="servicios" className="services-section">
            <div className="container">
                <h2 className="section-title">Nuestros Servicios</h2>
                <p className="section-subtitle">Descubre nuestras especialidades en bienestar</p>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-duration">{service.duration}</div>
                            <button className="service-btn">Más Información</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;