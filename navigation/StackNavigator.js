import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import Contact from "../screens/CotactScreen";
import LabTestHomeScreen from "../screens/LabTest/LabTestHomeScreen";
import BookLabTestScreen from "../screens/LabTest/BookLabTestScreen";
import MyLabTestScreen from "../screens/LabTest/MyLabTestScreen";
import SampleCollectionScreen from "../screens/LabTest/SampleCollectionScreen";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="About" component={AboutScreen} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const LabTestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Lab Test Home Screen'
        component={LabTestHomeScreen}
      />
      <Stack.Screen
        name='Sample Collection'
        component={SampleCollectionScreen} />
      <Stack.Screen
        name='My Lab Test Screen'
        component={MyLabTestScreen} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator, LabTestNavigator };