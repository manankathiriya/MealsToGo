import React, { useState } from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { ScrollView, StatusBar } from "react-native";
const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantDetails = ({ route }) => {
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={route.params.restaurant} />
      <ScrollView>
        <List.Accordion
          title="Break Fast"
          expanded={breakfast}
          left={(props) => <List.Icon icon="bread-slice" color={props.color} />}
          onPress={() => setBreakfast(!breakfast)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          expanded={lunch}
          left={(props) => <List.Icon icon="hamburger" color={props.color} />}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Burger W/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          expanded={dinner}
          left={(props) => (
            <List.Icon icon="food-variant" color={props.color} />
          )}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet With Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          expanded={drinks}
          left={(props) => <List.Icon icon="glass-wine" color={props.color} />}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
