// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-6 fixed w-full top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold hover:text-yellow-300 transition">Hetvi Patel</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
