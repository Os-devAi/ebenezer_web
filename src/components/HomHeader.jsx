import React, { useState, useEffect } from 'react';
import './HomeHeader.css';

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`home-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <h1>Ebenezer</h1>
          </div>
          <div className="header-title">
            <span className="platform-name">Centro de Masajes</span>
            <span className="platform-subtitle">Bienestar y Relajación</span>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;