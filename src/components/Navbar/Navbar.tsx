import type React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <section className="logo">World Clock</section>
      <section className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/favorites" onClick={closeMenu}>Favorites</NavLink>
      </section>
      <section className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </section>
      {isOpen && <section className="overlay" onClick={closeMenu}></section>}
    </nav>
  );
};

export default Navbar;
