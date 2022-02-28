import { Dimensions, StyleSheet, Text, TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// const WIDTH = Dimensions.get('window');

const LabTestCard = ({data}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SelectTestScreen')}>
      <Text>{data.title}</Text>
      <Text>{data.dis}</Text>
    </TouchableOpacity>
    
  )
}

export default LabTestCard

const styles = StyleSheet.create({
  container: {
      width: '90%',
      margin: 10,
      borderRadius: 18,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: "#fefefe",

  }
})