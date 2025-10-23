// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="nexus-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="nexus-info">
                        <div className="nexus-logo">
                            <span className="logo-icon">⚡</span>
                            <span className="logo-text">NexusDev</span>
                        </div>
                        <p className="nexus-description">
                            Desarrollando experiencias digitales excepcionales
                            con tecnología de vanguardia y diseño innovador.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Desarrollo</h4>
                            <ul>
                                <li><a href="#web">Web Apps</a></li>
                                <li><a href="#mobile">Mobile Apps</a></li>
                                <li><a href="#ecommerce">E-commerce</a></li>
                                <li><a href="#apis">APIs</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Servicios</h4>
                            <ul>
                                <li><a href="#consulting">Consultoría</a></li>
                                <li><a href="#design">Diseño UI/UX</a></li>
                                <li><a href="#maintenance">Mantenimiento</a></li>
                                <li><a href="#seo">SEO</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Contacto</h4>
                            <ul>
                                <li>
                                    <a href="mailto:contacto@nexusdev.com">
                                        📧 contacto@nexusdev.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+50212345678">
                                        📞 +502 1234-5678
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/50212345678" target="_blank" rel="noopener noreferrer">
                                        💬 WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-links">
                        <h4>Síguenos</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="GitHub" className="social-link">
                                <span className="social-icon">🐙</span>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social-link">
                                <span className="social-icon">💼</span>
                            </a>
                            <a href="#" aria-label="Instagram" className="social-link">
                                <span className="social-icon">📷</span>
                            </a>
                            <a href="#" aria-label="Twitter" className="social-link">
                                <span className="social-icon">🐦</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; {currentYear} <strong>NexusDev</strong>. Todos los derechos reservados.</p>
                        <p className="powered-by">
                            Desarrollado con ❤️ usando React.js & Node.js
                        </p>
                    </div>

                    <div className="legal-links">
                        <a href="#privacy">Política de Privacidad</a>
                        <a href="#terms">Términos de Servicio</a>
                        <a href="#cookies">Cookies</a>
                    </div>
                </div>
            </div>

            {/* Elemento decorativo */}
            <div className="footer-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
            </div>
        </footer>
    );
};

export default Footer;