import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FriendsRequests = () => {
  return (
    <View style={styles.container}>
      <Text>
        no requests
      </Text>
    </View>
  )
}

export default FriendsRequests

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16
  }
})