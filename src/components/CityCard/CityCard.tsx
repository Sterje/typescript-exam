import React, { useEffect, useState } from "react";

import type { City } from "../../types/types";
import { DateTime } from "luxon";
import "./CityCard.css";

// Props for the CityCard component coming from CityPage
interface CityCardProps {
  city: City;
  isFavorite?: boolean;
  onToggleFavorite?: (cityName: string) => void;
}
// Destructuring props and setting default for isFavorite
const CityCard: React.FC<CityCardProps> = ({
  city,
  isFavorite = false,
  onToggleFavorite,
}) => {
// State to hold the current local time in the city's timezone
// DateTime coming from luxon or null before it's set
  const [localTime, setLocalTime] = useState<DateTime | null>(null);

  useEffect(() => {
    // If city or timezone is not defined, do nothing, else set the local time
    if (!city?.timezone) return;
    setLocalTime(DateTime.now().setZone(city.timezone));

    // Update the time every second
    const interval = setInterval(() => {
      setLocalTime(DateTime.now().setZone(city.timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [city?.timezone]);
    // Function to handle favorite button click
  const handleFavoriteClick = () => {
    // IF onToggleFavorite prop is True, call it with the city name
    if (onToggleFavorite) {
      onToggleFavorite(city.name);
    }
  };
  return (
    <section className="city-card">
      <h2 className="city-name">{city.name}</h2>
      <p className="digital-time">{localTime ? localTime.toFormat("HH:mm:ss") : "Loading..."}</p>
      <section className="analog-clock">
        <section className="clock-face">
          <div className="hand hour" style={{ transform: `rotate(${localTime.hour * 30}deg)` }} />
          <div className="hand minute" style={{ transform: `rotate(${localTime.minute * 6}deg)` }} />
          <div className="hand second" style={{ transform: `rotate(${localTime.second * 6}deg)` }} />
        </section>
      </section>

      <button className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </section>
  );
};

export default CityCard;
