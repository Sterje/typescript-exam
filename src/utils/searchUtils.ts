import type { City } from "../types/types";
import { getAllCities } from './cityUtils';

export const findCityByName = (query: string): City | undefined => {
  const allCities: City[] = getAllCities();
  return allCities.find(
    (city) => city.name.toLowerCase() === query.trim().toLowerCase()
  );
};
