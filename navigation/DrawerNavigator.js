import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./TabNavigator";
import { ContactStackNavigator, LabTestNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Book Lab Test"
        component={LabTestNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;