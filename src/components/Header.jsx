// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>CropX</h1> {/* Replace with image if needed */}
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="sign-in">
          <a href="#sign-in">Sign In</a>
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};


