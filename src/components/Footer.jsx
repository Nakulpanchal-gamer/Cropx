// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>CropX</h1> {/* Replace with logo image if needed */}
        </div>

        <div className="footer-links">
          <ul className="footer-list">
            <li><a href="#about">About</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <ul className="social-icons">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CropX, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

