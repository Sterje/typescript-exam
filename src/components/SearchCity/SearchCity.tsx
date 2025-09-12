import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchCity.css";
import { findCityByName } from "../../utils/searchUtils";
import type { City } from "../../types/types";
import { getAllCities } from "../../utils/cityUtils";

const SearchCity = () => {
  // State to manage the search query
  const [query, setQuery] = useState<string>("");
  // State to manage error messages
  const [error, setError] = useState<string>("");

  const [suggestions, setSuggestions] = useState<City[]>([]);
  // Hook to navigate
  const navigate = useNavigate();
  // Ref for the container to handle clicks outside
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle the search action
  const handleSearch = () => {
    // Find city by name using the findCityByName util imported from searchUtils
    const matchedCity = findCityByName(query);
    // If a city is found, navigate to its page using the useNavigate hook, otherwise set an error message
    if (matchedCity) {
      setError("");
      navigate(`/city/${matchedCity.name}`);
    } else {
      setError("City not found");
    }
    // Clear the search input after searching
    setQuery("");
  };
  // Function to handle Enter key press in the input field
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const allCities = getAllCities();
    const matches = allCities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
  };

  return (
    <section className="search-container">
      <section className="search-input-wrapper">
        <section className="search-input-container" ref={containerRef}>
          {/* <input
            id="search-input"
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          /> */}
          <input
            id="search-input"
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((city) => (
                <li
                  key={city.id}
                  onClick={() => {
                    navigate(`/city/${city.name}`);
                    setQuery("");
                    setSuggestions([]);
                  }}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>

      <section className="error-message-container">
        {error && <p className="error-message">{error}</p>}
      </section>
    </section>
  );
};

export default SearchCity;
