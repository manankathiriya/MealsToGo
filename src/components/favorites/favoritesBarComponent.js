import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfoComponent } from "../restaurant/CompactRestaurantInfoComponent";
import { Spacer } from "../spacer/Spacer";
import { TextVar } from "../typography/text";

const FavoritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer position="left" size="large">
        <TextVar variant="caption">Favorites</TextVar>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetails", {
                    restaurant: restaurant,
                  });
                }}
              >
                <CompactRestaurantInfoComponent restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
