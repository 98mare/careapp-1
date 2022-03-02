import { StyleSheet, Text, View, ScrollView, FlatList, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const renderItem = (item) => {
  console.log(item);
  return (
    <View style={styles.tableData}>
      <Text>{item.item.title}</Text>
      <Text>{item.item.price}</Text>
    </View>
  )
}

const FinalDetailScreen = ({ route }) => {
  // console.log('route', route)
  const navigation = useNavigation();
  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'Home' }],
  // });




  // useEffect(() => {
  //   navigation.addListener('beforeRemove', event => {
  //     console.log('tyhis is event', event)
  //     event.preventDefault();
  //     Alert.alert(
  //       'Procede',
  //       'Arey you Sure',
  //       [
  //         {text: 'No', style: 'cancle', onPress: () => {}},
  //         {
  //           text: 'Yes',
  //           style: 'destructive',
  //           // onPress: () => navigation.dispatch(event.data.action)
  //           onPress: () => navigation.dispatch("LabTestHomeScreen")
  //         },
  //       ],
  //     )
  //   })
  // }, [navigation])

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // if (isSelectionModeEnabled()) {
        //   disableSelectionMode();
        //   return true;
        // } else {
        //   return false;
        // }
        navigation.reset({
          index: 0,
          routes: [{ name: 'LabTestHomeScreen' }],
        });
        console.log('yesss')
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress', onBackPress
        );
    }, [])
  );



  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text>Name: {route.params.name}</Text>
      </View>
      <View style={styles.details}>
        <Text>Age: {route.params.age}</Text>
      </View>
      <View style={styles.details}>
        <Text>Phone: {route.params.phone}</Text>
      </View>
      <View style={styles.details}>
        <Text>Address: {route.params.address}</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHead}>
          <Text>Test Title</Text>
          <Text>Price</Text>
        </View>
        <FlatList
          data={route.params.tests.params}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

    </View>
  )
}

export default FinalDetailScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    margin: 10,
    padding: 10,
    backgroundColor: "#fefefe"
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#232324",
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#232324",
  },
  tableData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#54545fc3",
  }
})