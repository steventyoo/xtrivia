import { useAuth } from '@app/hooks/AuthProvider'
import { animals } from '@app/models/BusinessConstants'
import { FontNames } from '@app/theme/fonts'
import React, { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import XLogo from '@assets/images/svgs/x-logo.svg'
import Svg from 'react-native-svg'

type Props = {
  containerStyle?: ViewStyle,
  onProfilePress?: () =>  void
}

const ProfileSummaryView: FC<Props> = ({
  containerStyle,
  onProfilePress
}) => {

  const { authProfile } = useAuth()

  const AnimalComponent = (animals.find(animal => animal.slug === authProfile?.avatar)?.image)

  return (
    <Pressable onPress={onProfilePress} style={{...styles.container, ...containerStyle}}>
      {AnimalComponent ? (
        <AnimalComponent
          width={50}
          height={50}
          style={styles.avatar}          
        />
      ) : (
        <Image
          source={require('@assets/images/octupus.png')}
          style={styles.avatar}
          resizeMode='contain'
        />
      )}
      <View style={styles.content}>
        <Text style={styles.text}>
          {authProfile?.username}
        </Text>
        <View style={styles.pointerPanel}>
          <XLogo width={15} height={15} />
          <View style={{ width: 5 }} />
          <Text style={styles.text}>
            0.00
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ProfileSummaryView

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  content: {
    marginLeft: 10,
  },
  text: {
    fontFamily: FontNames.InconsolataBold,
    fontSize: 12
  },
  pointerPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
})