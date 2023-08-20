import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState("");
  return (
    <ScrollView className="flex-1 bg-neutral-900">
      {/* back button */}
      <SafeAreaView className=" z-20 w-full flex-row justify-between items-center px-4 mt-3">
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
      {/* person details */}
    </ScrollView>
  );
};

export default PersonScreen;
