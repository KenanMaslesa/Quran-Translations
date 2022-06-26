import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DiscoverStackNavigator,
  FavoriteStackNavigator,
  MainStackNavigator,
} from "./MainStackNavigator";
import { COLORS } from "../shared/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.mainColor },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MainStackNavigator}
        options={
          {
            // tabBarShowLabel: false,
          }
        }
      />
      {/* <Tab.Screen name="FavoriteScreen" component={FavoriteStackNavigator} /> */}

      <Tab.Screen name="Search" component={DiscoverStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
