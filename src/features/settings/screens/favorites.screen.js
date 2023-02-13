import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favroitesContext";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/Spacer";
import { RestaurantList } from "../../restaurants/components/Restaurant-list.styles";
import RestaurantInfoCard from "../../restaurants/components/RestaurantInfoCard";
import styled from "styled-components/native";
import { TextVar } from "../../../components/typography/text";

const NoFavorites = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  if (favorites.length <= 0) {
    return (
      <NoFavorites>
        <TextVar variant="body">No Favorites Yet</TextVar>
      </NoFavorites>
    );
  }
  return (
    <RestaurantList
      data={favorites}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RestaurantDetails", { restaurant: item })
          }
        >
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        </TouchableOpacity>
      )}
    />
  );
};
