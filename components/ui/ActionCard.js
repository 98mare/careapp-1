import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ActionCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Book Lab Test')} style={{marginBottom: 15}}>

    <View style={styles.container} >
        <ImageBackground
          source={require('../../assets/images/BookLabTest.png')}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Book Lab Test</Text>
        </ImageBackground>
        {/* <Image
          source={require('../../assets/images/BookLabTest.png')}
        /> */}
    </View>
    </TouchableOpacity>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 110,
    overflow: 'hidden',
    borderRadius: 18
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: '#ffffff9e',
    fontSize: 16,
    padding: 2,
  }
})