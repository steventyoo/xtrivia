import { FontNames } from "@app/theme/fonts";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import XTriviaLogo from '@images/svgs/x-logo.svg'
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";

const AuthScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <XTriviaLogo width={50} height={50} />
        <Text style={styles.logoText}>
          trivia
        </Text>
      </View>
      <Image
        source={require('@assets/images/img-welcome-logo.png')}
        style={styles.welcomeLogoImage}
      />
      <Text style={styles.welcomeText}>
        welcome
      </Text>
      <Text style={styles.welcomeDescText}>
        discover top 10{'\n'}
        style trivia games{'\n'}
        driven by AI
      </Text>
      <View style={{ flex: 1 }} />
      <AuthCTAButton
        type="primary"
        text="sign up"
        containerStyle={styles.buttonsCommon}
      />
      <AuthCTAButton
        type="secondary"
        text="log in"
        containerStyle={styles.buttonsCommon}
      />
      <AuthCTAButton
        type="no-outline"
        text="play daily challenge"
        containerStyle={styles.buttonsCommon}
      />
      <View style={{ height: 60 }} />
    </SafeAreaView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  logoText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 50,
    marginLeft: 10,
  },
  welcomeLogoImage: {
    width: 125,
    height: 139,
    marginTop: 40,
    alignSelf: 'center'
  },
  welcomeText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',
    color: 'black'
  },
  welcomeDescText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 20,
    marginTop: 30,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 21,
  },
  buttonsCommon: {
    marginTop: 10,
    marginHorizontal: 44
  }
})