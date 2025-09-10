import { useState, useEffect } from "react";
import CityCard from "../../components/CityCard/CityCard";
import { cities as defaultCities } from "../../data/cities";
import type { City } from "../../types/types";
import { getFavorites, toggleFavorite } from "../../utils/favoriteUtils";
import "./Favorites.css";

const Favorites = () => {
  // State to hold favorite cities using City type array
  const [favoriteCities, setFavoriteCities] = useState<City[]>([]);

  useEffect(() => {
    // Get favorite cities from localStorage with getFavorites util
    const favoriteIds = getFavorites();
    // Combine default cities with any custom cities from localStorage
    const allCities: City[] = [
      ...defaultCities,
      ...(JSON.parse(localStorage.getItem("customCities") || "[]") as City[]),
    ];
    // Filter to ensure unique cities by ID
    const uniqueCities = allCities.filter(
      (city, index, self) => index === self.findIndex((c) => c.id === city.id)
    );
    // Match favorite IDs with city data
    const matchedFavorites = uniqueCities.filter((city) =>
      favoriteIds.includes(city.id)
    );
    setFavoriteCities(matchedFavorites);
  }, []);
  // Function to handle toggling favorite status
  const handleToggleFavorite = (cityID: string): void => {
    const updatedFavorites = toggleFavorite(cityID);
    setFavoriteCities((prevCities) =>
      prevCities.filter((city) => updatedFavorites.includes(city.id))
    );
  };
  return (
    <section className="favorites-page">
      <h2 className="favorites-title">Favorite Cities</h2>
      {favoriteCities.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        <section className="favorites-grid">
          {favoriteCities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              isFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default Favorites;
