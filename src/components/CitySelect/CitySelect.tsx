import React from "react";
import type { City } from "../../types/types";


interface CitySelectProps {
  cities: City[];
  onSelect: (city: City) => void;
}
// CitySelect component to render a dropdown of cities
const CitySelect: React.FC<CitySelectProps> = ({ cities, onSelect }) => {
  return (
    <select 
      aria-label="Choose city" 
      id="city-select"
      defaultValue=""
      // When a city is selected, call the onSelect prop with the selected city
      onChange={(e) => {
        const selected = cities.find((c) => c.name === e.target.value);
        if (selected) onSelect(selected);
      }}
    >
      <option value="" disabled>
        Choose a city
      </option>
      {/* Map city names to options from cities array containing all cities */}
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
