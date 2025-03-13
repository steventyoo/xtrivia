import React, { FC } from 'react'
import { Pressable, ViewStyle } from 'react-native'
import IconSwitchOn from '@assets/images/svgs/icon-toggle-on.svg'
import IconSwitchOff from '@assets/images/svgs/icon-toggle-off.svg'

type Props = {
  containerStyle?: ViewStyle,
  isOn?: boolean,
  onChangeValue?: (value: boolean) => void
}

const SwitchButton: FC<Props> = ({
  containerStyle,
  isOn,
  onChangeValue
}) => {
  return (
    <Pressable onPress={() => onChangeValue?.(!(isOn ?? false))} style={containerStyle}>
      {isOn ? (
        <IconSwitchOn width={31.22} height={18.57} />
      ) : (
        <IconSwitchOff width={31.22} height={18.57} />
      )}
    </Pressable>
  )
}

export default SwitchButton
