import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import Contact from "../screens/CotactScreen";
import LabTestHomeScreen from "../screens/LabTest/LabTestHomeScreen";
import MyLabTestScreen from "../screens/LabTest/MyLabTestScreen";
import SelectTestScreen from "../screens/LabTest/SelectTestScreen";
import UploadOrSelectScreen from "../screens/LabTest/UploadOrSelectScreen";
import AddInfoScreen from "../screens/LabTest/AddInfoScreen";
import FinalDetailScreen from "../screens/LabTest/FinalDetailScreen";

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
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}

const LabTestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LabTestHomeScreen'
        component={LabTestHomeScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name='UploadOrSelectScreen'
        component={UploadOrSelectScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name='SelectTestScreen'
        component={SelectTestScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name='MyLabTestScreen'
        component={MyLabTestScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name='AddInfoScreen'
        component={AddInfoScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name='FinalDetailScreen'
        component={FinalDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator, LabTestNavigator };