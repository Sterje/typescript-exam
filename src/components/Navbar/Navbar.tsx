// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import type { City } from '../../types/types';
import { getAllCities } from '../../utils/cityUtils';
import CitySelect from '../CitySelect/CitySelect';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [allCities, setAllCities] = useState<City[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAllCities(getAllCities());

    const interval = setInterval(() => {
      setAllCities(getAllCities());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCitySelect = (cityName: string) => {
    if (cityName) {
      navigate(`/city/${cityName}`);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>🌍 World Clock</h1>
      </div>

      <div className="navbar-right desktop">
        <CitySelect cities={allCities} onSelect={handleCitySelect} />
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
        <NavLink to="/add-city" className="nav-link">Lägg till stad</NavLink>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(true)}>☰</div>

      {menuOpen && (
        <div className="overlay-menu">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

            <CitySelect cities={allCities} onSelect={handleCitySelect} />

            <NavLink to="/" className="overlay-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/favorites" className="overlay-link" onClick={() => setMenuOpen(false)}>Favorites</NavLink>
            <NavLink to="/add-city" className="overlay-link" onClick={() => setMenuOpen(false)}>Lägg till stad</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
