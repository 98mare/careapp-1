import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import LandingPageOne from '../components/homeCompoents/LandingPageOne'
import Carousel from 'react-native-snap-carousel'
const carouselItems = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
]

const HomeScreen = () => {
  return (
    <ScrollView>
      <LandingPageOne></LandingPageOne>
      <Carousel
        layout='default'
        ref={LandingPageOne}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={LandingPageOne}
      ></Carousel>
      {/* landing page carousel cards */}

      {/* two buttons
        Book LabText
        Doctor appointment
       */}
      {/* Exclusive offer cards carousel */}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})