import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Cart from "./../pages/Cart";

import HomeStackNavigator from "./HomeStackNavigator";
import LoginStackNavigator from "./LoginStackNavigator";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "login") {
              iconName = focused ? "log-in-outline" : "log-in-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="home" component={HomeStackNavigator} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="login" component={LoginStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
