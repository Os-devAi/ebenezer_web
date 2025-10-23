// components/LocationMap.js
import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
    return (
        <section id="ubicacion" className="location-section">
            <div className="container">
                <div className="location-header">
                    <h2 className="section-title">Nuestra Ubicación</h2>
                    <p className="location-subtitle">
                        Visítanos en nuestro acogedor espacio en Syracuse
                    </p>
                </div>

                <div className="map-container">
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.123456789012!2d-76.1353651!3d43.0562256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3fa2a567fbb%3A0xdc6cd5368792b6a5!2sEbenezer!5e0!3m2!1ses!2sus!4v1694567890123!5m2!1ses!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '15px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de EBSENEZER en Syracuse"
                            className="map-iframe"
                        />
                    </div>

                    <div className="location-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h3>Dirección</h3>
                                <p>Ebenezer<br />Syracuse, NY 13210</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🕒</div>
                            <div className="info-content">
                                <h3>Horario de Atención</h3>
                                <p>Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                                   Sábados: 9:00 AM - 5:00 PM<br />
                                   Domingos: Cerrado</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h3>Contacto</h3>
                                <p>
                                    <a href="tel:9196561970" className="contact-link">
                                        (919) 656-1970
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">👩‍💼</div>
                            <div className="info-content">
                                <h3>Terapeuta</h3>
                                <p>Sayda Martinez<br />
                                   <span className="specialist">Especialista en Masajes</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location-cta">
                    <h3>¿Necesitas direcciones específicas?</h3>
                    <p>Te ayudamos a llegar sin problemas</p>
                    <div className="cta-buttons">
                        <a 
                            href="https://maps.google.com/maps?q=Ebenezer+Syracuse+NY+13210" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="direction-btn"
                        >
                            🗺️ Abrir en Google Maps
                        </a>
                        <a 
                            href="https://www.waze.com/ul?q=Ebenezer%20Syracuse%20NY%2013210" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="direction-btn waze-btn"
                        >
                            🚗 Abrir en Waze
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;