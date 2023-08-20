import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";

let { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  const movieName = "Ant-Man and the Wasp: Quantumania";
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState("");
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [cast, useCast] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    // call the moviedetails api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableHighlight
            className="rounded-xl p-1"
            onPress={() => toggleFavorite(!isFavorite)}
          >
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : "white"}
            />
          </TouchableHighlight>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ width, height: height * 0.4 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* movie details */}
      <View style={{ marginBottom: -(height * 0.02) }} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* status, relese, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released . 2020 . 170min
        </Text>
        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            thrill .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            comedy
          </Text>
        </View>
        {/* describtion */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          In this example, there are 2 screens (Home and Profile) defined using
          the Stack.Screen component. Similarly, you can define as many screens
          as you like. You can set options such as the screen title for each
          screen in the options prop of Stack.Screen. Each screen takes a
          component prop that is a React component. Those components receive a
          prop called navigation which has various methods to link to other
          screens. For example, you can use navigation.navigate to go to the
          Profile screen:
        </Text>
        {/* cast */}
        <Cast navigation={navigation} cast={cast} />
        {/* simiular movies */}
        <MovieList title="Similar Movies" data={similarMovies} hideSeeAll={true} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
