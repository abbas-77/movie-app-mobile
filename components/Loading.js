import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "../theme";

let { width, height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View
      style={{ width, height }}
      className="absolute flex-row justify-center items-center"
    >
      <ActivityIndicator size={150} color={theme.background} />
    </View>
  );
};

export default Loading;
