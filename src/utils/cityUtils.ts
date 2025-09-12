import type { City } from "../types/types";
// Imports the cities from the data file into defaultCities
import { cities as defaultCities } from "../data/cities";

export const getAllCities = (): City[] => {
    const customCities = JSON.parse(localStorage.getItem('customCities') || '[]') as City[];
    return [...defaultCities, ...customCities];
}