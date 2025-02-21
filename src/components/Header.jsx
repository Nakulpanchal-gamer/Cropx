// src/components/Header.js
import React, { useState, useEffect, FiMenu } from 'react';
// import '../assets/css/Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };\
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when resizing above 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsOpen(false); // Close menu when screen becomes large again
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <header className="header">
      <div className="logo">
        <h1>CropX</h1>  
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#solutions">Solutions</Link></li>
          <li><Link to="#pricing">Pricing</Link></li>
          <li><Link to="#blog">Blog</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
        <div className="sign-in">
          <Link to="/login2">Sign In</Link>
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

{/* <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo 
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              CropX
            </a>
          </div>

          {/* Desktop Menu 
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Features</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Pricing</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Contact</a>
          </div>

          {/* Mobile Menu Button 
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown 
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16">
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">Features</a>
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">Pricing</a>
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav> */}
    </header>
  );
};


