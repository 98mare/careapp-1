import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
// import Carousel from 'react-native-snap-carousel'
import Carousel from '../components/Carousel'
import GreetingComponent from '../components/homeCompoents/GreetingComponent'
import { useNavigation } from '@react-navigation/native'
import ActionCardComponent from '../components/homeCompoents/ActionCardComponent'


const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView mt={20}>
      {/* <LandingPageOne></LandingPageOne> */}
      {/* landing page carousel cards */}
      <GreetingComponent></GreetingComponent>
      <ActionCardComponent />
      <Carousel></Carousel>
      <Button
        title='Go to About'
        onPress={() => navigation.navigate("About")}
      ></Button>

      <Button
        title='Book Lab Test'
        onPress={() => navigation.navigate("Lab Test Home Screen")}
      ></Button>
      {/* Book lab Test */}
      {/* Book Appointment */}
      {/* Report */}
      {/* BMI Calculator */}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})