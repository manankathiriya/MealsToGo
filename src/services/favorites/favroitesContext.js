import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authenticationContext";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem(`favorites-${uid}`, jsonvalue);
    } catch (e) {
      console.log("Error Storing", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const fav = await AsyncStorage.getItem(`favorites-${uid}`);
      if (fav !== null) {
        setFavorites(JSON.parse(fav));
      }
    } catch (e) {
      console.log("Error Loading", e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
    saveFavorites(restaurant, user.uid);
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
