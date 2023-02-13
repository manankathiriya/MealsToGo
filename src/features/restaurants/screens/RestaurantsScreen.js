import { useContext, useState } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { RestaurantContext } from "../../../services/Restaurants/restaurant.context";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favoritesBarComponent";
import { FavoritesContext } from "../../../services/favorites/favroitesContext";
import { RestaurantList } from "../components/Restaurant-list.styles";
import { FadeView } from "../../../components/animations/fade.animation";
const Restaurant = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ActivityContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;

function RestaurantsScreen({ navigation }) {
  const { isLoading, error, restaurant } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggle, setIsToggle] = useState(false);
  if (error !== null) {
    console.log(error);
  }
  return (
    <Restaurant>
      <Search
        isFavoriteToggle={isToggle}
        onFavoriteToggle={() => setIsToggle(!isToggle)}
      />
      {isLoading && (
        <ActivityContainer>
          <ActivityIndicator color="#0800ff" size="large" animating={true} />
        </ActivityContainer>
      )}
      {isToggle && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurant}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <FadeView>
                <RestaurantInfoCard restaurant={item} />
              </FadeView>
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </Restaurant>
  );
}

export default RestaurantsScreen;
