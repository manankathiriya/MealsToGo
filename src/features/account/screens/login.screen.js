import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Spacer } from "../../../components/spacer/Spacer";
import { TextVar } from "../../../components/typography/text";

import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import {
  AccountCover,
  ErrorContainer,
  ImgBackground,
  Title,
} from "../components/account.style";
import {
  LogInButton,
  LoginContainer,
  TextInp,
} from "../components/login.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, error, onLogin, isLoading } = useContext(
    AuthenticationContext
  );

  function InputMailHandler(text) {
    setEmail(text);
  }

  function InputPasswordHandler(text) {
    setPassword(text);
  }

  async function logInHandler() {
    try {
      await onLogin(email, password);
      if (isAuthenticated) {
        navigation.navigate("Restaurants");
      }
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <ImgBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <LoginContainer>
        <TextInp
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={InputMailHandler}
        />
        <TextInp
          label="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={InputPasswordHandler}
        />
        {error && (
          <ErrorContainer>
            <Spacer size="small">
              <TextVar variant="error">{error}</TextVar>
            </Spacer>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <LogInButton
            icon="lock-open-outline"
            mode="contained"
            onPress={logInHandler}
          >
            Log In
          </LogInButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </LoginContainer>
      <Spacer position="top" size="large">
        <LogInButton
          icon="keyboard-backspace"
          mode="Contained"
          textColor="white"
          onPress={() => navigation.goBack()}
        >
          Back
        </LogInButton>
      </Spacer>
    </ImgBackground>
  );
};
