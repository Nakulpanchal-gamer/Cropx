// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// import './Footer.css'; // Import the external CSS file

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <h1 className="footer-logo">CropX</h1>
          <p>Transforming agriculture with real-time data insights.</p>
        </div>

        {/* CropX Products */}
        <div className="footer-section">
          <h3>CropX Products</h3>
          <ul>
            <li><a href="#field-data">Field Data</a></li>
            <li><a href="#disease-control">Disease Control</a></li>
            <li><a href="#irrigation-management">Irrigation Management</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#membership">Become a CropX Member</a></li>
            <li><a href="#knowledge-base">Knowledge Base</a></li>
            <li><a href="#resources">Resources & Downloads</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook"><FaFacebook /></a>
            <a href="#linkedin"><FaLinkedin /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 CropX, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};


