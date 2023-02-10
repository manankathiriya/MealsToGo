import React, { createContext, useState, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";

import { restaurantsRequest, transformresult } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const getRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(transformresult)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setError("not Fetched");
          setIsLoading(false);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationstring = `${location.lat},${location.lng}`;
      getRestaurants(locationstring);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
