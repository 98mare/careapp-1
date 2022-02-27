import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LabTestCard = ({data}) => {
  console.log(data);
  return (
    <View>
      <Text>{data.title}</Text>
      <Text>{data.dis}</Text>
    </View>
  )
}

export default LabTestCard

const styles = StyleSheet.create({})