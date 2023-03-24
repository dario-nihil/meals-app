import { createContext } from "react";

const intialValue = {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
};

const FavoritesContext = createContext(intialValue);

export const FavoriteContextProvider = ({ children }) => {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoriteContextProvider;
