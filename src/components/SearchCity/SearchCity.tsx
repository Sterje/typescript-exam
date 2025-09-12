import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchCity.css";
import { findCityByName } from "../../utils/searchUtils";

const SearchCity = () => {
  // State to manage the search query
  const [query, setQuery] = useState<string>("");
  // State to manage error messages
  const [error, setError] = useState<string>("");
  // Hook to navigate
  const navigate = useNavigate();
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
        </section>
      </section>

      <section className="error-message-container">
        {error && <p className="error-message">{error}</p>}
      </section>
    </section>
  );
};

export default SearchCity;
