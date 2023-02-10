import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

function MainScreen() {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
}

function Login() {
  return (
    <View>
      <Text>LogIn Screen</Text>
    </View>
  );
}

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={MainScreen} />
    <Stack.Screen name="LogIn" component={Login} />
  </Stack.Navigator>
);
