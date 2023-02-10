import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, MapCallout } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/Restaurants/restaurant.context";
import { MapCalloutComponent } from "../components/MapCalloutComponent";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurant = [] } = useContext(RestaurantContext);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurant.map((rest) => {
          return (
            <Marker
              key={rest.name}
              title={rest.name}
              coordinate={{
                latitude: rest.geometry.location.lat,
                longitude: rest.geometry.location.lng,
              }}
            >
              <MapCallout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: rest,
                  })
                }
              >
                <MapCalloutComponent restaurant={rest} />
              </MapCallout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
