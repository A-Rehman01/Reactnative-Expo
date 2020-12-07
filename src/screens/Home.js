import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Camera");
        }}
        title="camera"
        style={styles.btn}
      />
      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Gallery");
        }}
        title="Gallery"
        style={styles.btn}
      />
      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Viewmap");
        }}
        title="View Map"
        style={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginTop: 2,
    width: 120,
  },
});
export default Home;
