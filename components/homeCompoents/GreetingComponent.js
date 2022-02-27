import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Card, Text } from 'react-native-elements'

const GreetingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.left}>
        <Text h3 style={styles.title}>Good Morining Alex</Text>
        <Text style={styles.dis}>Your target for today is to keep positive mindset and smile to everyone you meet.</Text>
      </View>
      <View style={styles.right}>
        <Avatar
          rounded
          source={require('../../assets/images/user.png')}
          size="large"
        />
      </View>
      </View>
    </View>
  )
}

export default GreetingComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  left: {
    width: "70%"
  },
  right: {
    width: "25%",
  },
  card: {
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 18,
  },
  title:{
    color: "#205072",
    marginBottom: 10,
  },
  dis: {
    color: '#161616'
  }
  
})