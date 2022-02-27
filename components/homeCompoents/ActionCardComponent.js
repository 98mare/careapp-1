import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionCard from '../ui/ActionCard'

const ActionCardComponent = () => {
  return (
    <View style={styles.container}>
      <ActionCard/>
      <ActionCard/>
      <ActionCard/>
      <ActionCard/>
    </View>
  )
}

export default ActionCardComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})