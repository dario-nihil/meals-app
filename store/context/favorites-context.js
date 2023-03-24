import { createContext, useState } from "react";

const intialValue = {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
};

export const FavoritesContext = createContext(intialValue);

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
