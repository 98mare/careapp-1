import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddInfoScreen = ({ route }) => {
  console.log("this is params", route.params)
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();
  const [sampleNo, setSampleNo] = useState();
  const [phone, setPhone] = useState();

  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();
  const [time, setTime] = useState()
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [finalData, setFinalData] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setNewDate(date.toLocaleDateString()) //toLocaleString
    setTime(date.toLocaleTimeString())
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  const handleSubmit = () => {

    navigation.navigate('FinalDetailScreen', {
      name: name,
      address: address,
      age: age,
      sampleNo: sampleNo,
      phone: phone,
      tests: route.params
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sample Collecton</Text>
      <TextInput
        style={styles.TextInput}
        placeholder='name..'
        onChangeText={(name) => setName(name)}

      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder='address..'
        onChangeText={(address) => setAddress(address)}
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder='age..'
        onChangeText={(age) => setAge(age)}
        keyboardType='numeric'
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder='sampleNo..'
        onChangeText={(sampleNo) => setSampleNo(sampleNo)}
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder='phone..'
        onChangeText={(phone) => setPhone(phone)}
        keyboardType='numeric'
      ></TextInput>
      <TouchableOpacity
        onPress={showDatepicker}
        style={styles.TextInput}
      >
        <Text>{newDate === undefined ? 'date..' : newDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={showTimepicker}
        style={styles.TextInput}
      >
        <Text>{time === undefined ? 'time..' : time}</Text>
      </TouchableOpacity>
      {show &&
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      }


      <Button title='submit' onPress={handleSubmit}></Button>

    </View>
  )
}

export default AddInfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    backgroundColor: '#fefefe'
  },
  title: {
    fontSize: 24,
    textTransform: 'capitalize',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  TextInput: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderColor: '#f1f1df',
    color: '#4c4747',
    borderRadius: 4,
  },
})