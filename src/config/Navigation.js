import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CameraApp from "../components/HardwareAccess/Camera";
import Gallery from "../components/HardwareAccess/Gallery";
import Viewmap from "../components/HardwareAccess/Viewmap";

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraApp} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Viewmap" component={Viewmap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
