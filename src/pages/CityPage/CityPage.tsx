import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import cities from '../../data/cities.json'
import type { City } from "../../types/types"
import CityCard from "../../components/CityCard/CityCard"
import { toggleFavorite, isFavorite } from "../../utils/favoriteUtils"

const CityPage = () => {
    const { cityName } = useParams<{ cityName: string }>();
    const [cityData, setCityData] = useState<City | undefined>(undefined);
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        if (cityName) {
            const matchedCity = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
            setCityData(matchedCity);
            setFavorite(isFavorite(cityName));
        }
    }, [cityName]);

    const handleToggleFavorite = (name: string) => {
        const updated = toggleFavorite(name);
        setFavorite(updated.includes(name));
    }

    return (
        <CityCard
            city={cityData}
            isFavorite={favorite}
            onToggleFavorite={handleToggleFavorite}
        />
    )
}

export default CityPage