import type { City } from "../types/types";
// Imports the cities from the data file into defaultCities
import { cities as defaultCities } from "../data/cities";

// Function to get all cities, combining default cities and custom cities from localStorage
export const getAllCities = (): City[] => {
    const customCities = JSON.parse(localStorage.getItem('customCities') || '[]') as City[];
    return [...defaultCities, ...customCities];
}