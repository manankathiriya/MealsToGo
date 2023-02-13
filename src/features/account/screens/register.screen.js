import React, { useContext, useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { isAuthenticated, error, onSignIn, isLoading } = useContext(
    AuthenticationContext
  );

  function InputMailHandler(text) {
    setEmail(text);
  }

  function InputPasswordHandler(text) {
    setPassword(text);
  }

  function InputRepeatedPassHandler(text) {
    setRepeatedPassword(text);
  }

  async function signInHandler() {
    try {
      await onSignIn(email, password, repeatedPassword);
      if (isAuthenticated) {
        navigation.navigate("Restaurants");
      }
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
    setRepeatedPassword("");
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
        <TextInp
          label="Repeat Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={repeatedPassword}
          onChangeText={InputRepeatedPassHandler}
        />
        {error && (
          <ErrorContainer>
            <Spacer size="small">
              <TextVar variant="error">{error}</TextVar>
            </Spacer>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <LogInButton icon="email" mode="contained" onPress={signInHandler}>
            Register
          </LogInButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
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
