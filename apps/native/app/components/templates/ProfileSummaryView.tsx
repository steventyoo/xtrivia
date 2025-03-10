import { useAuth } from '@app/hooks/AuthProvider'
import { animals } from '@app/models/BusinessConstants'
import { FontNames } from '@app/theme/fonts'
import React, { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import XLogo from '@assets/images/svgs/x-logo.svg'

type Props = {
  containerStyle?: ViewStyle
}

const ProfileSummaryView: FC<Props> = ({
  containerStyle
}) => {

  const { authProfile } = useAuth()

  return (
    <Pressable style={{...styles.container, ...containerStyle}}>
      {(authProfile?.avatar === 'dog' || authProfile?.avatar === 'cat' || authProfile?.avatar === 'mouse') ? (
        <Image
          source={animals.find(animal => animal.slug === authProfile.avatar)?.image}
          style={styles.avatar}
          resizeMode='contain'
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