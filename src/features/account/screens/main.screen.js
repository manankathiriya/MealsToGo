import React from "react";
import {
  AccountContainer,
  AccountCover,
  AuthButton,
  ImgBackground,
  LottieContainer,
  Title,
} from "../components/account.style";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/Spacer";

export const MainScreen = ({ navigation }) => {
  function logInPressHandler() {
    navigation.navigate("Login");
  }

  function registerPressHandler() {
    navigation.navigate("Register");
  }

  return (
    <ImgBackground>
      <AccountCover />
      <LottieContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/Watermelon.json")}
        />
      </LottieContainer>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={logInPressHandler}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account-plus-outline"
            mode="contained"
            onPress={registerPressHandler}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </ImgBackground>
  );
};
