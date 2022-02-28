import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TestCard from '../../components/LabTestComponent/TestCard';
const data = [
  {
    id: 1,
    title: 'Complete Blood Count',
    price: 850,
  },
  {
    id: 2,
    title: 'Hemogran',
    price: 450,
  },
  {
    id: 3,
    title: 'Renal Functionn Text',
    price: 750,
  },
  {
    id: 4,
    title: 'Liver function Test',
    price: 1050,
  },
  {
    id: 5,
    title: 'Complete Blood Count',
    price: 850,
  },
  {
    id: 6,
    title: 'Collagen Disease / Arthrities Panel',
    price: 850,
  },
  {
    id: 7,
    title: 'Anaemia Pael',
    price: 850,
  },
  {
    id: 8,
    title: 'Fertility Profile Female',
    price: 850,
  },
  {
    id: 9,
    title: 'Complete Blood Count 2',
    price: 850,
  },
];


const SelectTestScreen = () => {

  const [slected, setSelected] = useState([]);

  const retData = (e) => {
    let arr = slected;
    if (arr.includes(e)) {
      // for removing speciic data
      const index = arr.indexOf(e);
      if (index > -1) {
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }

      // arr = [2, 9]
      console.log(arr);
    } else {
      arr.push(e);
    }
    setSelected(arr);
    console.log(slected);
  }

  const renderItem = ({ item }) => (

    <TestCard data={item} retData={retData} arrData={slected} />
  );
  return (

    <View>
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.btnNav}>
        <View style={styles.btnContainer}>
          <View style={styles.left}>
            <Text>total</Text>
            <Text>Rs.212121</Text>
          </View>
          <Button title='Proceed'></Button>

        </View>
      </View>
    </View>
    // <View>
    //   <Text>Float item</Text>
    // </View>
  )
}

export default SelectTestScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 80,
  },
  btnNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  btnContainer: {
    height: 80,
    backgroundColor: '#f3b3b37c',
  }
})