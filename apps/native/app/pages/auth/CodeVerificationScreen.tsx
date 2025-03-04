import { FontNames } from "@app/theme/fonts";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Keyboard, KeyboardEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@app/components/Logo";
import { Colors } from "@app/theme/colors";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamsList } from "@app/navigation/AuthStack";

const CELL_COUNT = 6

const CodeVerificationScreen = () => {

  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>()

  const [bottomHeight, setBottomHeight] = useState(80)

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleContinue = () => {
    navigation.navigate('PlayerIdCreateScreen')
  }

  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      setBottomHeight(e.endCoordinates.height + 20)      
    }

    function onKeyboardDidHide() {
      setBottomHeight(60)
    }

    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} iconSize={35} textSize={30} />
      <View>
        <Text style={styles.titleText}>
          verification code
        </Text>
        <Text style={styles.subTitleText}>
          we sent you a text message with a 4-digit code
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => (
            <View key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
              <Text
                key={index}
                style={styles.cellText}>
                {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
            </View>

          )}
        />          
      </View>
      <View style={{...styles.actionView, bottom: bottomHeight}}>
        <AuthCTAButton
          type="no-outline"
          text="resend code"
          textUnderline    
        />
        <AuthCTAButton
          type="primary"
          text="continue"
          onPress={handleContinue}
          disabled={value.length < 6}
          containerStyle={styles.cta}
        />
      </View>
    </SafeAreaView>
  )
}

export default CodeVerificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginTop: 20,
    alignSelf: 'center'
  },
  titleText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
    color: 'black'
  },
  subTitleText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 16,
    marginHorizontal: 60,
    marginTop: 40,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 18,
  },
  inputView: {
    marginTop: 30,
    marginHorizontal: 60,    
  },
  codeFieldRoot: {
    marginTop: 30,
    marginHorizontal: 60,
  },
  cell: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray[92],
    borderRadius: 5,
  },
  focusCell: {
    backgroundColor: Colors.gray[95],
  },
  cellText: {
    fontSize: 24,
  },
  actionView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,    
  },
  cta: {
    marginHorizontal: 60
  }
})