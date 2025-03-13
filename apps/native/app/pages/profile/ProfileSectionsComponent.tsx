import { Colors } from '@app/theme/colors'
import { FontSizes } from '@app/theme/fonts'
import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'


export enum ProfileSection {
  stats = 'stats',
  avatars = 'avatars',
  friends = 'friends',
  rank = 'rank'
}

const sections = [ProfileSection.stats, ProfileSection.avatars, ProfileSection.friends, ProfileSection.rank]


type Props = {
  containerStyle?: ViewStyle,
  onSectionItemClick: (section: ProfileSection) => void
  selectedSectionItem?: ProfileSection
}

const ProfileSectionsComponent: FC<Props> = ({
  containerStyle,
  onSectionItemClick,
  selectedSectionItem
}) => {

  const [selectedItem, setSelectedItem] = useState<ProfileSection>(ProfileSection.stats)

  const handleSelectSection = (section: ProfileSection) => {
    setSelectedItem(section)
    if (section !== selectedItem) {
      onSectionItemClick?.(section)
    }
  }

  useEffect(() => {
    if (selectedSectionItem) {
      if (selectedItem !== selectedSectionItem) {
        setSelectedItem(selectedSectionItem)
      }
    }
  }, [selectedSectionItem])

  return (
    <View style={{...styles.container, ...containerStyle}}>
      {sections.map((section) => (
        <TouchableOpacity onPress={() => handleSelectSection(section)} key={section} style={[styles.itemCommon, selectedItem === section ? styles.itemSelected : styles.itemNormal]}>
          <Text style={[styles.itemTextCommon, selectedItem === section ? styles.itemTextSelected : styles.itemTextNormal]}>
            {section}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ProfileSectionsComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  itemCommon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  itemSelected: {
    backgroundColor: Colors.blue.primary
  },
  itemNormal: {
    borderWidth: 1,
    borderColor: Colors.gray[40]
  },
  itemTextCommon: {
    fontSize: FontSizes.body.small,    
  },
  itemTextSelected: {
    color: 'white'
  },
  itemTextNormal: {
    color: 'black'
  }
})
