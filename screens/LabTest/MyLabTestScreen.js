import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestCard from '../../components/LabTestComponent/TestCard';



const MyLabTestScreen = () => {
  

  return (
    <View>
      <Text>MyLabTestScreen</Text>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MyLabTestScreen

const styles = StyleSheet.create({})