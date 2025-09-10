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
}