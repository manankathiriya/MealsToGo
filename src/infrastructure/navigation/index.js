import { AppNavigator } from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";

import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authenticationContext";
import { AccountNavigator } from "./account.navigation";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
