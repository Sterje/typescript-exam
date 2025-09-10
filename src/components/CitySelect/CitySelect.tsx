import React from "react";
import type { City } from "../../types/types";

interface CitySelectProps {
  cities: City[];
  onSelect: (cityName: string) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({ cities, onSelect }) => {
  return (
    <select defaultValue="" onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled>Välj stad</option>
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
