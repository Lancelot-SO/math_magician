import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="math">Math Magician</div>
      <ul>
        <li><Link className="navLink" to="/">Home</Link></li>
        <li><Link className="navLink" to="/calculator">Calculator</Link></li>
        <li><Link className="navLink" to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </>
);

export default Navbar;
