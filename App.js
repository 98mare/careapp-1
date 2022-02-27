import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './navigation/DrawerNavigator';
// import { MainStackNavigator } from './navigation/StackNavigator';
// import BottomTabNavigator from './navigation/TabNavigator';
// import HomeScreen from './screens/HomeScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator> */}
          {/* <MainStackNavigator></MainStackNavigator> */}
          {/* <BottomTabNavigator></BottomTabNavigator> */}
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
