import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigation } from "./restaurants.navigation";
import { MapScreen } from "../../features/map/screens/MapScreen";

import { RestaurantContextProvider } from "../../services/Restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favroitesContext";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "green",
            }}
          >
            <Tab.Screen
              name="RestaurantsNavigation"
              component={RestaurantNavigation}
              options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="restaurant" size={size} color={color} />
                ),
                tabBarLabel: "Restaurants",
              }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="md-map" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Setting"
              component={SettingsNavigator}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="md-settings" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
