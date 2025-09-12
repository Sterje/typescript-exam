import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import type { City } from "../../types/types";
import { getAllCities } from "../../utils/cityUtils";
import CitySelect from "../CitySelect/CitySelect";
import "./Navbar.css";

const Navbar = () => {
  // State to manage if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // State to store all cities
  const [allCities, setAllCities] = useState<City[]>([]);
  const navigate = useNavigate();

  // Get all cities on mount and refresh every second to include newly added cities
  // We are using getAllCities util to fetch cities
  useEffect(() => {
    setAllCities(getAllCities());

    const interval = setInterval(() => {
      setAllCities(getAllCities());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle city selection from the dropdown
  // When a city is selected, navigate to its page and close the menu
  // If city name is defined, navigate to that city's page
  const handleCitySelect = (city: City) => {
    if (city?.name) {
      navigate(`/city/${city.name}`);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <section className="navbar-left">
        <h1 id="navbar-title">World Clock</h1>
      </section>

      <section className="navbar-right desktop">
        {/* Sending props to CitySelect */}
        <CitySelect cities={allCities} onSelect={handleCitySelect} />
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
        <NavLink to="/add-city" className="nav-link">
          Add city
        </NavLink>
      </section>

      <section className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </section>
      {/* If menu is open, show overlay */}
      {menuOpen && (
        <section className="overlay-menu">
          <section className="overlay-content">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            {/* Sending props to CitySelect */}
            <CitySelect cities={allCities} onSelect={handleCitySelect} />

            <NavLink
              to="/"
              className="overlay-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className="overlay-link"
              onClick={() => setMenuOpen(false)}
            >
              Favorites
            </NavLink>
            <NavLink
              to="/add-city"
              className="overlay-link"
              onClick={() => setMenuOpen(false)}
            >
              Add city
            </NavLink>
          </section>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
