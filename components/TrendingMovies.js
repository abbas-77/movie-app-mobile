import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/MovieDB";

let { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require("../assets/images/moviePoster1.png")}
        source={{ uri: image500(item.poster_path) }}
        style={{ height: height * 0.42, width: width * 0.62, borderRadius: 20 }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
