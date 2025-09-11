// Imports data from cities.json into cityData
import cityData from './cities.json';
import type { City } from '../types/types';

// Exports the city data as an array named cities of City objects
export const cities: City[] = cityData;
