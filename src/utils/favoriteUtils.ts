// Function to get favorites from localStorage
export const getFavorites = (): string[] => {
    // Retrieve the favorites array from localStorage, or return an empty array if not found
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// Function to toggle favorite status of a city
export const toggleFavorite = (id: string): string[] => {
  const current = getFavorites();
  // If city already exists in favorites, remove it, else add it
  const updated = current.includes(id)
    ? current.filter((cityId) => cityId !== id)
    : [...current, id];

  // Save updated favorites list to localStorage
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};
// Function to check if a city is in favorites
export const isFavorite = (cityId: string): boolean => {
  return getFavorites().includes(cityId);
};
