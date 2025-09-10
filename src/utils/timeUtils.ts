import { DateTime } from "luxon";

// Function to get the current local time in a specified timezone
export const getLocalTime = (cityTimeZone: string) => {
  // Use Luxon to get the current time in the specified timezone
  return DateTime.now().setZone(cityTimeZone);
};
