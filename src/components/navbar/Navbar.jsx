import React from 'react';
import './navbar.css';
import logo from '../../assets/Odyssey.svg';

export default function Navbar () {
  return (
    <nav className="navbar">
      <div className="navbar-left logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#">Stay Connected</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">About Us</a></li>
          <li><button>Sign Up</button></li>
        </ul>
      </div>
      
    </nav>
  );
};

