import type React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <section className="logo">World Clock</section>
        <section className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </section>
        <section className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </section>

    </nav>
  )
};

export default Navbar;
