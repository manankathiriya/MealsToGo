import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem("favorites", jsonvalue);
    } catch (e) {
      console.log("Error Storing", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const fav = await AsyncStorage.getItem("favorites");
      if (fav !== null) {
        setFavorites(JSON.parse(fav));
      }
    } catch (e) {
      console.log("Error Loading", e);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
    saveFavorites(restaurant);
  };

  const remove = (restaurant) => {
    const newFav = favorites.filter((x) => x.placeId !== restaurant.placeId);
    setFavorites(newFav);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
