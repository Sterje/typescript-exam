import React, { useEffect, useState } from "react";

import type { City } from "../../types/types";
import { DateTime } from "luxon";
import "./CityCard.css";

interface CityCardProps {
  city: City;
  isFavorite?: boolean;
  onToggleFavorite?: (cityName: string) => void;
}

const CityCard: React.FC<CityCardProps> = ({
  city,
  isFavorite = false,
  onToggleFavorite
}) => {
  const [localTime, setLocalTime] = useState(DateTime.now().setZone(city?.timezone)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(DateTime.now().setZone(city.timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [city.timezone]);

  const handleFavoriteClick = () => {
    if (onToggleFavorite) {
      onToggleFavorite(city.name);
    }
  };
  return (
    <section className="city-card">
      <h2 className="city-name">{city.name}</h2>
      <p className="digital-time">{localTime.toFormat("HH:mm:ss")}</p>
      <section className="analog-clock">
        <section className="clock-face">
          <section className="hand hour"></section>
          <section className="hand minute"></section>
          <section className="hand second"></section>
        </section>
      </section>

      <button className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </section>
  );
};

export default CityCard;
