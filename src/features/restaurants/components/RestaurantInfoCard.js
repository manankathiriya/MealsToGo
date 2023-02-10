import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacer";
import { TextVar } from "../../../components/typography/text";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Info,
  Address,
  Rating,
  Section,
  RestaurantInfoIconsContainer,
} from "./RestaurantInfoCardStyles";
import { FavoritesComponent } from "../../../components/favorites/favoritesComponent";

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    placeId = "some Id",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const defrating = restaurant.rating ? restaurant.rating : rating;
  const ratingArray = Array.from(new Array(Math.floor(defrating)));
  return (
    <RestaurantCard elevation={5}>
      <FavoritesComponent restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                key={`${i}-${placeId}`}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <RestaurantInfoIconsContainer>
            {isClosedTemporarily && (
              <TextVar variant="error">CLOSED TEMPORARILY</TextVar>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </RestaurantInfoIconsContainer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
export default RestaurantInfoCard;
