import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LabCard = ({data}) => {
  const navigation  = useNavigation()
  return (
    <TouchableOpacity style={styles.contaier} onPress={()=>navigation.navigate('UploadOrSelectScreen')}>
    <View >
      <Text>{data.name}</Text>
      <Text>{data.address}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default LabCard

const styles = StyleSheet.create({
  contaier: {
    minWidth: "100%",
    backgroundColor: '#fefefe',
    // marginBottom: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  }
})