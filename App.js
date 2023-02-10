import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/Restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavoritesContextProvider } from "./src/services/favorites/favroitesContext";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYwJKwRBdC6ngGgxc_3tWcQ_8sd0UhSyA",
  authDomain: "mealstogo-314a2.firebaseapp.com",
  projectId: "mealstogo-314a2",
  storageBucket: "mealstogo-314a2.appspot.com",
  messagingSenderId: "420033879516",
  appId: "1:420033879516:web:61ddd7ec785125839fc319",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
