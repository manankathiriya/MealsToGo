import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";
import { TextVar } from "../typography/text";

const IsAndroid = Platform.OS === "android";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfoComponent = ({ restaurant }) => {
  const Content = IsAndroid ? CompactWebview : CompactImage;
  let fav = false;
  const route = useRoute();
  fav = route.name !== "Map";
  return (
    <Item>
      {fav && <CompactImage source={{ uri: restaurant.photos[0] }} />}
      {!fav && <Content source={{ uri: restaurant.photos[0] }} />}
      <TextVar variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TextVar>
    </Item>
  );
};
