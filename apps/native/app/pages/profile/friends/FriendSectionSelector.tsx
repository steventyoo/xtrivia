import { Colors } from '@app/theme/colors'
import React, { FC, useState } from 'react'
import { TouchableOpacity, View, Text, ViewStyle, Image } from 'react-native'
import { StyleSheet } from 'react-native'

import IconFriends from '@assets/images/svgs/icon-friend-group.svg'
import IconFriendRequests from '@assets/images/svgs/icon-friend-requests.svg'
import { FontSizes } from '@app/theme/fonts'


export enum FriendSection {
  friends = 'friends',
  requests = 'requests',
  search = 'search'
}

const sections = [FriendSection.friends, FriendSection.requests, FriendSection.search]

type Props = {
  containerStyle?: ViewStyle,
  onSectionItemClick: (section: FriendSection) => void
}

const FriendSectionSelector: FC<Props> = ({
  containerStyle,
  onSectionItemClick,
}) => {

  const [selectedItem, setSelectedItem] = useState<FriendSection>(FriendSection.friends)

  const handleSelectSection = (section: FriendSection) => {
    setSelectedItem(section)
    if (section !== selectedItem) {
      onSectionItemClick?.(section)
    }
  }


  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {sections.map((section, index) => (
        <TouchableOpacity
          onPress={() => handleSelectSection(section)}
          key={section}
          style={[styles.itemCommon, selectedItem === section ? styles.itemSelected : styles.itemNormal, index < 2 ? { marginRight: 10 } : {}]}
        >
          {section === FriendSection.friends && (
            <IconFriends width={15} height={15} />
          )}
          {section === FriendSection.requests && (
            <IconFriendRequests width={15} height={15} />
          )}
          {section === FriendSection.search && (
            <Image source={require('@assets/images/icon-img-yellow-search.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
          )}
          <Text style={styles.itemTextCommon}>
            {section}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default FriendSectionSelector

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  itemCommon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    flex: 1,
    flexDirection: 'row',
  },
  itemSelected: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.blue.primary
  },
  itemNormal: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[40]
  },
  itemTextCommon: {
    marginLeft: 10,
    fontSize: FontSizes.body.small,
  },  
})
