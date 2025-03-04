import { Colors } from "@app/theme/colors";
import React, { FC, ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

type Props = {
  type?: 'primary' | 'secondary' | 'no-outline',
  onPress?: () => void,
  disabled?: boolean,
  text: string,
  textUnderline?: boolean,
  containerStyle?: ViewStyle,
  leftIcon?: ReactElement
}

const AuthCTAButton: FC<Props> = ({
  type = 'primary',
  disabled = false,
  onPress,
  text,
  textUnderline = false,
  leftIcon,
  containerStyle
}) => {

  const backgroundColor = disabled ? Colors.gray[70] : type === 'primary' ? Colors.blue.primary : type === 'secondary' ? Colors.gray[95] : 'transparent'

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor },
        containerStyle,
      ]}
    >
      <Text style={[styles.text, { color: type === 'primary' ? 'white' : 'black' }, textUnderline ? { textDecorationLine: 'underline' } : {}]}>
        {text}
      </Text>
      {leftIcon && (
        <View style={styles.leftIconContainer}>
          {leftIcon}
        </View>
      )}
    </TouchableOpacity>
  )
}

export default AuthCTAButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 44,
  },
  text: {
    fontSize: 12,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 20,
    top: 0,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  }
})