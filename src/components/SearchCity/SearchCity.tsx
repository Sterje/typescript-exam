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
    <section className="search-input-container">
      <input
        id="search-input"
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} id="search-button">
        Search
      </button>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default SearchCity;
