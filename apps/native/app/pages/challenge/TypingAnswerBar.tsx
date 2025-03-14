import { Colors } from '@app/theme/colors'
import { FontSizes } from '@app/theme/fonts'
import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'

type Props = {
  hintText?: string
  containerStyle?: ViewStyle
  inputText: string
  prevHintButtonAvailable: boolean
  nextHintButtonAvailable: boolean
  setInputText: (text: string) => void
  onFastForwardClick: () => void
  onAnswerTyped: () => void
  onPrevHint: () => void
  onNextHint: () => void
}

const TypingAnswerBar: FC<Props> = ({
  hintText,
  containerStyle,
  inputText,
  prevHintButtonAvailable,
  nextHintButtonAvailable,
  setInputText,
  onFastForwardClick,
  onAnswerTyped,
  onPrevHint,
  onNextHint,
}) => {

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputViewContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='type answer here'
          submitBehavior='submit'
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={(e) => {
            onAnswerTyped()
          }}  
        />
        <TouchableOpacity onPress={onFastForwardClick} style={styles.fastForwardButton}>
          <Image source={require('@assets/images/icon-img-10sec-fast-forward.png')} style={styles.fastForwardButtonImage} />
        </TouchableOpacity>
      </View>
      {!!hintText && (
        <View style={styles.hintView}>
          <TouchableOpacity onPress={onPrevHint} disabled={!prevHintButtonAvailable} style={{...styles.hintArrowButtons, opacity: prevHintButtonAvailable ? 1 : 0.3}}>
            <Image source={require('@assets/images/icon-img-prev-arrow.png')} style={styles.hintArrowImages} />
          </TouchableOpacity>
          <Text style={styles.hintText}>
            {hintText}
          </Text>
          <TouchableOpacity onPress={onNextHint} disabled={!nextHintButtonAvailable} style={{...styles.hintArrowButtons, opacity: nextHintButtonAvailable ? 1 : 0.3}}>
            <Image source={require('@assets/images/icon-img-next-arrow.png')} style={styles.hintArrowImages} />
          </TouchableOpacity>
        </View>
      )}      
    </View>
  )
}

export default TypingAnswerBar

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  inputViewContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,    
  },
  textInput: {
    height: 40,
    flex: 1,
    borderRadius: 5,
    borderColor: Colors.gray[92],
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10
  },
  fastForwardButton: {
    width: 40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fastForwardButtonImage: {
    width: 25,
    height: 25
  },
  hintView: {
    width: '100%',
    backgroundColor: Colors.yellow[25],
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  hintText: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSizes.body.small
  },
  hintArrowButtons: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hintArrowImages: {
    width: 20,
    height: 20
  }
})