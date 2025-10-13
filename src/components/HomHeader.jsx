import React, { useState, useEffect } from 'react';
import './HomeHeader.css';

const HomeHeader = () => {

  return (
    <header className="home-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <h1>Ebenezer</h1>
          </div>
          <div className="header-title">
            <span className="platform-name"></span>
            <span className="platform-subtitle"></span>
          </div>
        </div>
      </div>


    </header>
  );
};

export default HomeHeader;