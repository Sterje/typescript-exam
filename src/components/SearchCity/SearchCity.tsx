import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchCity.css";
import { findCityByName } from "../../utils/searchUtils";

const SearchCity = () => {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const matchedCity = findCityByName(query);

    if (matchedCity) {
      setError("");
      navigate(`/city/${matchedCity.name}`);
    } else {
      setError("City not found");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="search-container">
      <section className="search-input-wrapper">
        <section className="search-input-container">
          <input
            id="search-input"
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <section className="search-button-container">
            <button onClick={handleSearch} id="search-button">
              Search
            </button>
          </section>
        </section>
      </section>

      <section className="error-message-container">
        {error && <p className="error-message">{error}</p>}
      </section>
    </section>
  );
};

export default SearchCity;
