import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul className="links">
      <li className="link">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="link">
        <Link to="/Categories">CATEGORIES</Link>
      </li>
    </ul>
    <button type="button">Person</button>
  </nav>
);

export default Navbar;
