import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/config/Navigation";

export default function App() {
  return (
    // <View style={styles.container}>
    <Navigation />
    //   <StatusBar style="auto" />
    // </View>
  );
}
// https://docs.expo.io/versions/latest/sdk/map-view/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
