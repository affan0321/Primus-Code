import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="header">
        <div className="navbar">
            <div className="logo">
                <h5>PRIMUS <br /> CODE</h5>
        </div>
        <div className="nav-links">
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Work</li>
                <li>Blogs</li>
                <button>Contact Us</button>
            </ul>
        </div>
    </div>
    </div>
    
  );
}