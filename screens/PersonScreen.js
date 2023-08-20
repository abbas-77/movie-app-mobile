import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/MovieList";

let { width, height } = Dimensions.get("window");

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState("");
  const [personMovie, setPersonMovie] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <ScrollView className="flex-1 bg-neutral-900">
      {/* back button */}
      <SafeAreaView className=" z-20 w-full flex-row justify-between items-center px-4 my-4">
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
          <HeartIcon size="35" color={isFavorite ? "red" : "white"} />
        </TouchableHighlight>
      </SafeAreaView>
      {/* person details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            ...Platform.select({
              android: {
                elevation: 5,
              },
              ios: {
                shadowColor: "gray",
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
              },
            }),
          }}
        >
          <View className="w-72 h-72 rounded-full overflow-hidden items-center border border-neutral-500">
            <Image
              source={require("../assets/images/castImage1.png")}
              style={{ width: width * 0.7, height: height * 0.55 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            London, United Kingdown
          </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-400 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-400 text-sm">1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-400 text-sm">Acting</Text>
          </View>
          <View className=" px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-400 text-sm">63.24</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            behave the same and have the same performance characteristics as
            apps built natively on top of those APIs. React Navigation also has
            packages for different kind of navigators such as tabs and drawer.
            You can use them to implement various patterns in your app.
          </Text>
        </View>
        <MovieList title="Movie" hideSeeAll={true} data={personMovie} />
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
