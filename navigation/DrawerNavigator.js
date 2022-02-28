import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// import BottomTabNavigator from "./TabNavigator";
import { ContactStackNavigator, LabTestNavigator, MainStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        // options={{
        //   headerShown: false,
        // }}
      />
      {/* <Drawer.Screen
        name="LabTest"
        component={LabTestNavigator}
        options={{
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name="Contact"
        component={ContactStackNavigator}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Drawer.Screen
        name="BookLabTest"
        component={LabTestNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;