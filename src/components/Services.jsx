import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Masajes Relajantes",
            description: "Alivia el estrés y la tensión muscular con nuestras técnicas de relajación profunda.",
            icon: "💆‍♀️",
            duration: "",
            includes: "Incluye limpieza facial gratuita"
        },
        {
            id: 2,
            title: "Linfáticos",
            description: "Estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos.",
            icon: "🔄",
            duration: "",
            includes: "Incluye limpieza facial gratuita"
        },
        {
            id: 3,
            title: "Maderoterapia",
            description: "Técnica ancestral que utiliza herramientas de madera para remodelar y tonificar.",
            icon: "🪵",
            duration: "",
            includes: "Incluye limpieza facial gratuita"
        },
        {
            id: 4,
            title: "Dolores Musculares",
            description: "Tratamiento especializado para aliviar contracturas y tensiones musculares.",
            icon: "🎯",
            duration: "",
            includes: "Incluye limpieza facial gratuita"
        },
        {
            id: 5,
            title: "Golpes y Torceduras",
            description: "Atención terapéutica para recuperación de lesiones y traumatismos.",
            icon: "🩹",
            duration: "",
            includes: "Incluye limpieza facial gratuita"
        }
    ];

    return (
        <section id="servicios" className="services-section">
            <div className="container">
                <div className="services-header">
                    <p className="business-tagline">Salud y Bienestar Integral</p>
                </div>

                <div className="services-intro">
                    <h2 className="section-title-services">Ofrecemos servicios de:</h2>
                    <p className="free-offer">
                        Por su servicio recibirá una <span className="highlight">limpieza facial GRATIS</span>
                    </p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-header">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="service-details">
                                <span className="service-duration">{service.duration}</span>
                                <span className="service-includes">{service.includes}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact-info">
                    <div className="location">
                        <span className="location-icon">📍</span>
                        <span>Syracuse, NY</span>
                    </div>
                    <div className="attendant">
                        <span>Le atiende: </span>
                        <strong>Sayda Martinez</strong>
                    </div>
                    <div className="phone-number">
                        <a href="tel:919-656-1970" className="phone-link">
                            📞 919-656-1970
                        </a>
                    </div>
                    <button className="info-button">
                        Más Información
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;