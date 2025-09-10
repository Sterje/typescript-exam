// Function to get favorites from localStorage
export const getFavorites = (): string[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// Function to toggle favorite status of a city
export const toggleFavorite = (cityName: string): string[] => {
  const current = getFavorites();
  // If city already exists in favorites, remove it, else add it
  const updated = current.includes(cityName)
    ? current.filter((name) => name !== cityName)
    : [...current, cityName];

  // Save updated favorites list to localStorage
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};
// Function to check if a city is in favorites
export const isFavorite = (cityName: string): boolean => {
  return getFavorites().includes(cityName);
};
