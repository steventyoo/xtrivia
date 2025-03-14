import { Fonts, FontSizes } from "@app/theme/fonts";
import React, { useMemo, useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";
import Logo from "@app/components/Logo";
import { Colors } from "@app/theme/colors";
import PhoneInput, { ICountry, isValidPhoneNumber } from "react-native-international-phone-number";
import AppleLogo from '@assets/images/svgs/icon-apple-logo.svg'
import GoogleLogo from '@assets/images/svgs/icon-google-logo.svg'
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamsList } from "@app/navigation/AuthStack";
import { supabase } from "@app/services/supabase";

const RegisterScreen = () => {

  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>()

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [inputValue, setInputValue] = useState('');

  const [processingPhoneAuth, setProcessingPhoneAuth] = useState(false)

  const handleInputValue = (phoneNumber: string) => {
    setInputValue(phoneNumber);
  }

  const handleSelectedCountry = (country: ICountry | null) => {
    setSelectedCountry(country);
  }

  const handleMobile = async () => {

    setProcessingPhoneAuth(true)
    const phone = `${selectedCountry?.callingCode} ${inputValue}`
    const { error } = await supabase.auth.signInWithOtp({ phone: phone.replace(/\s+/g, '') })

    setProcessingPhoneAuth(false)
    if (error) {
      console.log('Error sending OTP:', error.message);
      Alert.prompt('SMS Failed', "Sorry, we are unable to use your phone number to authorize", [{ text: 'Ok' }])      
    } else {
      navigation.navigate('CodeVerificationScreen', { phone })
    }
  }

  const canAuthByPhone = useMemo(() => {
    if (selectedCountry) {
      return isValidPhoneNumber(inputValue, selectedCountry)
    } else {
      return false
    }    
  }, [selectedCountry, inputValue])


  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} iconSize={35} textSize={30} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} contentContainerStyle={{}}>
        <ScrollView>
          <Text style={styles.titleText}>
            log in or create an account
          </Text>
          <Text style={styles.subTitleText}>
            by continuing, you agree to the terms of service, and privacy policy
          </Text>          
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
            disabled={!canAuthByPhone}
            loading={processingPhoneAuth}
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
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: FontSizes.h.regular,
    marginTop: 20,
    alignSelf: 'center',
    color: 'black'
  },
  subTitleText: {
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: FontSizes.body.large,
    marginHorizontal: 20,
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
  inputCaption: {
    fontSize: FontSizes.body.small,
  },
  input: {
    marginTop: 5,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: FontSizes.body.small,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 60,
  },
  dividerText: {
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: FontSizes.body.small,
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
    fontSize: FontSizes.body.small,
  }
})