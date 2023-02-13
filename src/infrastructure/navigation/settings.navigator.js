import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
  </Stack.Navigator>
);
