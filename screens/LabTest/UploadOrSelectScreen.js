import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LabTestCard from '../../components/LabTestComponent/LabTestCard';

const data = [
  {
    id: 1,
    title: 'Upload RX',
    dis: 'Upload Image or PDF of your doctors lab test requirements'
  },
  {
    id: 2,
    title: 'Select Test',
    dis: 'Select the test you want to perform available from the list'
  },
];

const renderItem = ({ item }) => (
  <LabTestCard data={item} />
)

const UploadOrSelectScreen = () => {
  
  return (
    <View>
      <Text>UploadOrSelectScreen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

export default UploadOrSelectScreen

const styles = StyleSheet.create({})