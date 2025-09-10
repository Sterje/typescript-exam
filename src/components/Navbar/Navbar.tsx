import type React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  // State to set the to open and closed
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Function to toggle open and close on menu
  const toggleMenu = () => setIsOpen(!isOpen);
  // Function to close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <section className="logo">World Clock</section>
      {/* If isOpen is true, add "open" to className */}
      <section className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/favorites" onClick={closeMenu}>
          Favorites
        </NavLink>
      </section>
      <section
        // If isOpen is true, add "open" to className
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </section>
      {/* If isOpen is true, show the overlay and close the menu when clicking outside */}
      {isOpen && <section className="overlay" onClick={closeMenu}></section>}
    </nav>
  );
};

export default Navbar;
