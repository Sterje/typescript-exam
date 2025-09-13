import React, { useEffect, useState } from "react";
import type { City } from "../../types/types";
import { DateTime } from "luxon";
import { getLocalTime } from "../../utils/timeUtils"; // ✅ Importera funktionen
import "./CityCard.css";

interface CityCardProps {
  city: City;
  isFavorite?: boolean;
  onToggleFavorite?: (cityName: string) => void;
}

const CityCard: React.FC<CityCardProps> = ({
  city,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [localTime, setLocalTime] = useState<DateTime | null>(null);

  useEffect(() => {
    if (!city?.timezone) return;

    setLocalTime(getLocalTime(city.timezone));

    const interval = setInterval(() => {
      setLocalTime(getLocalTime(city.timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [city?.timezone]);

  const handleFavoriteClick = () => {
    if (onToggleFavorite) {
      onToggleFavorite(city.id);
    }
  };

  return (
    <section className="city-card">
      <h2 className="city-name">{city.name}</h2>
      <p className="digital-time">
        {localTime ? localTime.toFormat("HH:mm:ss") : "Loading..."}
      </p>
      {localTime && (
        <section className="analog-clock">
          <section className="clock-face">
            <div
              className="hand hour"
              style={{ transform: `rotate(${localTime.hour * 30}deg)` }}
            />
            <div
              className="hand minute"
              style={{ transform: `rotate(${localTime.minute * 6}deg)` }}
            />
            <div
              className="hand second"
              style={{ transform: `rotate(${localTime.second * 6}deg)` }}
            />
          </section>
        </section>
      )}

      <button
        className={`favorite-button ${isFavorite ? "remove" : "add"}`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </section>
  );
};

export default CityCard;
