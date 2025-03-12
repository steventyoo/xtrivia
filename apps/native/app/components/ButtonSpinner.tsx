import LottieView from 'lottie-react-native'
import React, { FC } from 'react'
import { ViewStyle } from 'react-native'

type Props = {
  style?: ViewStyle;
  color?: string;
  spinnerSize?: number;
}

const ButtonSpinner: FC<Props> = ({
  style,
  color = '#fff',
  spinnerSize
}) => {
  return (
    <LottieView
      autoPlay
      style={[{ width: spinnerSize, height: spinnerSize }, style]}
      source={require('@assets/animations/dot-spinner.json')}
      colorFilters={[
        { keypath: 'Dot 4', color },
        { keypath: 'Dot 3', color },
        { keypath: 'Dot 2', color },
        { keypath: 'Dot 1', color }
      ]}
    />
  )
}

export default ButtonSpinner
