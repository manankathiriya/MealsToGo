import React from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Avatar, List } from "react-native-paper";
import { Spacer } from "../../../components/spacer/Spacer";
import { TextVar } from "../../../components/typography/text";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  function favorite() {
    navigation.navigate("Favorites");
  }
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon icon="human" size={180} backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <TextVar variant="label">{user.email}</TextVar>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View Your Favourites"
          onPress={favorite}
          left={(props) => <List.Icon {...props} icon="heart" />}
        />
        <SettingsItem
          title="Log Out"
          onPress={() => onLogout()}
          left={(props) => <List.Icon {...props} icon="exit-to-app" />}
        />
      </List.Section>
    </SafeArea>
  );
}
