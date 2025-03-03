import { FontNames } from "@app/theme/fonts";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";
import Logo from "@app/components/Logo";
import { Colors } from "@app/theme/colors";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import AppleLogo from '@assets/images/svgs/icon-apple-logo.svg'
import GoogleLogo from '@assets/images/svgs/icon-google-logo.svg'

const RegisterScreen = () => {

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>();
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (phoneNumber: string) => {
    setInputValue(phoneNumber);
  }

  const handleSelectedCountry = (country: ICountry | null) => {
    setSelectedCountry(country);
  }


  const handleEmail = () => {

  }

  const handleMobile = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} iconSize={35} textSize={30} />
      <Text style={styles.titleText}>
        log in or create an account
      </Text>
      <Text style={styles.subTitleText}>
        by continuing, you agree to the terms of service, and privacy policy
      </Text>
      <View style={styles.inputView}>
        <Text style={styles.inputCaption}>
          email address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
        />
      </View>
      <AuthCTAButton
        type="primary"
        text="continue with email"
        onPress={handleEmail}
        containerStyle={styles.buttonsCommon}
      />
      <View style={styles.dividerView}>
        <View style={styles.dividerSeparator} />
        <Text style={styles.dividerText}>
          or
        </Text>
        <View style={styles.dividerSeparator} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputCaption}>
          phone number
        </Text>
        <PhoneInput
          value={inputValue}
          defaultCountry="US"
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          phoneInputStyles={{
            container: styles.phoneInputContainer,
            flagContainer: styles.phoneInputFlagContainer,
            callingCode: styles.phoneInputCallingCode,
            divider: styles.phoneInputDivider,
            input: styles.phoneInputInput
          }}
        />
      </View>
      <AuthCTAButton
        type="primary"
        text="continue with mobile"
        onPress={handleMobile}
        containerStyle={styles.buttonsCommon}
      />
      <View style={styles.dividerView}>
        <View style={styles.dividerSeparator} />
        <Text style={styles.dividerText}>
          or
        </Text>
        <View style={styles.dividerSeparator} />
      </View>
      <AuthCTAButton
        type="secondary"
        text="sign in with apple"
        leftIcon={<AppleLogo width={25} height={25} />}
        containerStyle={styles.buttonsCommon}
      />
      <AuthCTAButton
        type="secondary"
        text="sign in with google"
        leftIcon={<GoogleLogo width={25} height={25} />}
        containerStyle={styles.buttonsCommon}
      />
      <View style={{ height: 60 }} />
    </SafeAreaView>
  )
}

export default RegisterScreen

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
    marginHorizontal: 20,
    marginTop: 40,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 18,
  },
  inputView: {
    marginTop: 20,
    marginHorizontal: 60,
  },
  inputCaption: {
    fontSize: 12,    
  },
  input: {
    marginTop: 5,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 60,
  },
  dividerText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 14,
    marginHorizontal: 10,
    lineHeight: 16,
  },
  dividerSeparator: {
    backgroundColor: Colors.inputBorder,
    height: 1,
    flex: 1,
  },
  buttonsCommon: {
    marginTop: 10,
    marginHorizontal: 60
  },
  phoneInputContainer: {
    marginTop: 10
  },
  phoneInputFlagContainer: {
    marginRight: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 10
  },
  phoneInputCallingCode: {
    display: 'none',
    width: 0,
    opacity: 0,
  },
  phoneInputDivider: {
    display: 'none'
  },
  phoneInputInput: {
    paddingHorizontal: 5,
    fontSize: 12,
  }
})