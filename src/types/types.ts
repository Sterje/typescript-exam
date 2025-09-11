/** Timezones that are supported in the app */
export type TimeZone =
  | "Europe/Stockholm"
  | "America/New_York"
  | "Asia/Tokyo"
  | "Australia/Sydney"
  | "Africa/Cairo"
  | "Europe/London"
  | "America/Los_Angeles"
  | "Asia/Dubai"
  | "America/Sao_Paulo"
  | "Asia/Shanghai"
  | "Europe/Paris"
  | "America/Chicago"
  | "Asia/Kolkata"
  | "Pacific/Auckland"
  | "Africa/Johannesburg"
  | "Europe/Berlin"
  | "Asia/Singapore"
  | "America/Toronto"
  | "Asia/Seoul"
  | "Europe/Moscow"
  | "Europe/London"
  | "Europe/Paris"
  | "Europe/Berlin"
  | "Europe/Moscow"
  | "America/Sao_Paulo"
  | "America/Mexico_City"
  | "America/Argentina/Buenos_Aires"
  | "Asia/Hong_Kong";

/** Interface for a city  */
export interface City {
  id: string;
  name: string;
  timezone: TimeZone;
  isCustom?: boolean; // If the city has been added by the user
}

/** Interface for clock settings */
export interface ClockSettings {
  showAnalog: boolean;
  showDigital: boolean;
}

/** Interface for favorites */
export interface FavoriteData {
  cities: string[]; 
}

/** Interface for user settings */
export interface UserSettings {
  favorites: FavoriteData;
  customCities: City[];
  clockSettings: ClockSettings;
}