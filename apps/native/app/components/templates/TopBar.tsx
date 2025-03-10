import React, { FC } from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'
import ProfileSummaryView from './ProfileSummaryView'
import { TouchableOpacity } from 'react-native'

type Props = {
  containerStyle?: ViewStyle,
  withSettings?: boolean,
  onProfilePress?: () => void
}

const TopBar: FC<Props> = ({
  containerStyle,
  withSettings,
  onProfilePress
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <ProfileSummaryView onProfilePress={onProfilePress} containerStyle={styles.profileView} />
      <View style={{ flex: 1 }} />
      {withSettings && (
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('@assets/images/img-settings.png')} style={styles.settingsIcon}/>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
  },
  profileView: {
    marginLeft: 16
  },
  rightButton: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingsIcon: {
    width: 25,
    height: 25
  }
})
