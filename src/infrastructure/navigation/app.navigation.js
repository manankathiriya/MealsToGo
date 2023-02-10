import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigation } from "./restaurants.navigation";
import { MapScreen } from "../../features/map/screens/MapScreen";

const Tab = createBottomTabNavigator();
function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
