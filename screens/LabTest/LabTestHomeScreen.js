import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LabCard from '../../components/ui/LabCard'
const data = [
  {
    id: 1,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 2,
    name: "Kantipur Path Lab",
    address: 'Pulchowk, Lalitpur'
  },
  {
    id: 3,
    name: "National Reference Laboratory",
    address: 'New Baneshwor, Kathmandu'
  },
  {
    id: 4,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 5,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 6,
    name: "Kantipur Path Lab",
    address: 'Pulchowk, Lalitpur'
  },
  {
    id: 7,
    name: "National Reference Laboratory",
    address: 'New Baneshwor, Kathmandu'
  },
  
  {
    id: 8,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 9,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 10,
    name: "Kantipur Path Lab",
    address: 'Pulchowk, Lalitpur'
  },
  {
    id: 11,
    name: "National Reference Laboratory",
    address: 'New Baneshwor, Kathmandu'
  },
  {
    id: 12,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 13,
    name: "Nepal Meds Laboratory",
    address: 'Baluwatar, Kathmandu'
  },
  {
    id: 14,
    name: "Kantipur Path Lab",
    address: 'Pulchowk, Lalitpur'
  },
  {
    id: 15,
    name: "National Reference Laboratory",
    address: 'New Baneshwor, Kathmandu'
  },
  
]

const LabTestHomeScreen = () => {

  const renderItem = ({item}) => (
    <LabCard data={item} />
  )
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default LabTestHomeScreen

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center'
  }
})