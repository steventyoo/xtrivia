import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle, Text } from 'react-native'
import IconClock from '@assets/images/svgs/icon-clock.svg'
import { formatTime } from '@app/utils/timeUtils'
import { Fonts, FontSizes } from '@app/theme/fonts'
import { Colors } from '@app/theme/colors'

type Props = {
  style?: ViewStyle
  dots: number
}

const DotProgressBar: FC<Props> = ({
  style,
  dots
}) => {

  return (
    <View style={[styles.container, style]}>
      {new Array(dots).fill(0).map((_, index) => (
        <View key={`dot-${index}`} style={{ ...styles.dot, marginRight: index === dots - 1 ? 0 : 4 }} >
        </View>
      ))}
    </View>
  )
}

export default DotProgressBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.red[95]
  }
})
