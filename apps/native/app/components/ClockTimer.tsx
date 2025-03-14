import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle, Text } from 'react-native'
import IconClock from '@assets/images/svgs/icon-clock.svg'
import { formatTime } from '@app/utils/timeUtils'
import { Fonts, FontSizes } from '@app/theme/fonts'
import { Colors } from '@app/theme/colors'

type Props = {
  style?: ViewStyle
  timeInSeconds: number
  isRedAlert: boolean
}

const ClockTimer: FC<Props> = ({
  style,
  timeInSeconds,
  isRedAlert
}) => {

  return (
    <View style={[styles.container, style]}>
      <IconClock width={25} height={25} />
      <Text style={{ ...styles.text, color: isRedAlert ? Colors.red[95] : 'black' }}>
        {formatTime(timeInSeconds)}
      </Text>
    </View>
  )
}

export default ClockTimer

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10,
    fontFamily: Fonts.RobotoMono.bold,
    fontSize: FontSizes.h.regular
  }
})
