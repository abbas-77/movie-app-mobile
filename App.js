import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
