import React, { FC } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import XTriviaLogo from '@images/svgs/x-logo.svg'
import { FontNames, FontSizes } from '@app/theme/fonts'

type Props = {
  containerStyle?: ViewStyle;
  iconSize?: number;
  textSize?: number;
}

const Logo: FC<Props> = ({
  containerStyle,
  iconSize = 50,
  textSize = 50
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <XTriviaLogo width={iconSize} height={iconSize} />
      <Text style={{...styles.logoText, fontSize: textSize}}>
        trivia
      </Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  logoText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: FontSizes.h.extraLarge,
    marginLeft: 10,
  },
  logoContainer: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
})