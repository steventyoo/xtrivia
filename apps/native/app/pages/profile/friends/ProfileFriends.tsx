import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import FriendSectionSelector, { FriendSection } from './FriendSectionSelector'
import MyFriendsList from './MyFriendsList'
import FriendsRequests from './FriendsRequests'
import FriendsSearch from './FriendsSearch'

const ProfileFriends = () => {

  const [section, setSection] = useState(FriendSection.friends)

  const handleChangeSection = (sec: FriendSection) => {
    setSection(sec)
  }

  return (
    <View style={styles.container}>
      <FriendSectionSelector onSectionItemClick={handleChangeSection}/>
      {section === FriendSection.friends && (
        <MyFriendsList />
      )}
      {section === FriendSection.requests && (
        <FriendsRequests />
      )}
      {section === FriendSection.search && (
        <FriendsSearch />
      )}
    </View>
  )
}

export default ProfileFriends

const styles = StyleSheet.create({
  container: {
    height: '100%',    
  },  
})