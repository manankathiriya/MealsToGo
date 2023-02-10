import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchterm) => {
    setIsLoading(true);
    setKeyword(searchterm);    
  };

  useEffect(()=>{
    if (!keyword.length) {
        return;
      }
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          setLocation(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
  },[keyword]);
  return (
    <LocationContext.Provider
      value={{
        location,
        error,
        isLoading,
        keyword,
        onSearch: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
