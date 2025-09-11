import React from "react";
import type { City } from "../../types/types";

interface CitySelectProps {
  cities: City[];
  onSelect: (city: City) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({ cities, onSelect }) => {
  return (
    <select
      defaultValue=""
      onChange={(e) => {
        const selected = cities.find((c) => c.name === e.target.value);
        if (selected) onSelect(selected);
      }}
    >
      <option value="" disabled>
        Choose a city
      </option>
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
