import React, { useState, useEffect } from 'react';
import './HomeHeader.css';

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`home-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <h1>Ebenezer</h1>
          </div>
          <div className="header-title">
            <span className="platform-name">Centro de Masajes</span>
            <span className="platform-subtitle">By Sayda Martínez</span>
          </div>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a></li>
            <li><a href="#galeria" onClick={() => setIsMobileMenuOpen(false)}>Galería</a></li>
            <li><a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;