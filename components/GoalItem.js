import {StyleSheet, View, Text, Pressable} from 'react-native'
import { useState } from 'react'

function GoalItem({text, onDeleteItem, id}){//mesma coisa que usar os props

  return(
          <View style={styles.goalItem} >
            <Pressable onPress={onDeleteItem.bind(this, id)} android_ripple={{color: '#dddddd'}} style = {({pressed})=>pressed && styles.pressedItem}>
            <Text style = {styles.goalText}>
            {text}
            </Text>
            </Pressable>
          </View>
  ) 
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText: {
        color: 'white',
        padding: 8
      }
})