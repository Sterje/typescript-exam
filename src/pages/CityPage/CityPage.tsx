import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCities } from "../../utils/cityUtils";

import type { City } from "../../types/types";
import CityCard from "../../components/CityCard/CityCard";
import { toggleFavorite, isFavorite } from "../../utils/favoriteUtils";
import SearchCity from "../../components/SearchCity/SearchCity";

// CityPage component to display details of a specific city
const CityPage = () => {
  // Get cityName from URL parameters
  const { cityName } = useParams<{ cityName: string }>();
  // State to hold city data
  const [cityData, setCityData] = useState<City | undefined>(undefined);
  // State to manage if the city is a favorite
  const [favorite, setFavorite] = useState<boolean>(false);

  // On component mount or when cityName changes, fetch city data
  useEffect(() => {
    const allCities = getAllCities();
    if (cityName) {
      const matchedCity = allCities.find(
        (c) => c.name.trim().toLowerCase() === cityName.trim().toLowerCase()
      );
      setCityData(matchedCity);
      if (matchedCity) {
        setFavorite(isFavorite(matchedCity.id)); 
      }
    }
  }, [cityName]);

  // Function to handle toggling favorite status
  const handleToggleFavorite = (name: string) => {
    const updated = toggleFavorite(name);
    setFavorite(updated.includes(name));
  };
  if (!cityData) {
    return <p>City not found</p>;
  }
  return (
    <>
      {/* CityCard component with props to display city information */}
      <CityCard
        city={cityData}
        isFavorite={favorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <section className="city-page-search">
        {/* SearchCity component for searching other cities */}
        <SearchCity />
      </section>
    </>
  );
};

export default CityPage;
