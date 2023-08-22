import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";
import { fetchUpcomingMovies } from "../api/MovieDB";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // const getUpcomingMovies = async () => {
  //   return data;
  // };

  // const data = fetchUpcomingMovies();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          // initialParams={data}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Person"
          component={PersonScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
