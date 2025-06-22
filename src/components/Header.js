import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="logo">Umar<span className="accent">.</span></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
