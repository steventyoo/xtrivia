import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyFriendsList = () => {
  return (
    <View style={styles.container}>
      <Text>
        no friends, yet
      </Text>
    </View>
  )
}

export default MyFriendsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,    
  }
})