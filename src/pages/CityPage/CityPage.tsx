import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllCities } from '../../utils/cityUtils'

import type { City } from "../../types/types"
import CityCard from "../../components/CityCard/CityCard"
import { toggleFavorite, isFavorite } from "../../utils/favoriteUtils"
import SearchCity from "../../components/SearchCity/SearchCity"

const CityPage = () => {
    const { cityName } = useParams<{ cityName: string }>();
    const [cityData, setCityData] = useState<City | undefined>(undefined);
    const [favorite, setFavorite] = useState<boolean>(false);

useEffect(() => {
  const allCities = getAllCities();
  if (cityName) {
    const matchedCity = allCities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    setCityData(matchedCity);
    setFavorite(isFavorite(cityName));
  }
}, [cityName]);


    const handleToggleFavorite = (name: string) => {
        const updated = toggleFavorite(name);
        setFavorite(updated.includes(name));
    }
    if (!cityData) {
        return <p>City not found</p>;
    }
    return (
        <>
            <SearchCity />
            <CityCard
                city={cityData}
                isFavorite={favorite}
                onToggleFavorite={handleToggleFavorite}
            />
        </>
    )
}

export default CityPage
  