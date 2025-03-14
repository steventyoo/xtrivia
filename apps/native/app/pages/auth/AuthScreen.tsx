import { Fonts, FontSizes } from "@app/theme/fonts";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";
import Logo from "@app/components/Logo";
import { AuthStackParamsList } from "@app/navigation/AuthStack";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "@app/navigation/RootStack";

const AuthScreen = () => {

  const navigation = useNavigation<NavigationProp<AuthStackParamsList & RootStackParamsList>>()

  const handleSignup = () => {
    navigation.navigate('RegisterScreen')
  }

  const handlePlayDailyChallenge = () => {
    navigation.navigate('Challenge')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} />
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
        text="sign up / log in"
        onPress={handleSignup}
        containerStyle={styles.buttonsCommon}
      />
      <AuthCTAButton
        onPress={handlePlayDailyChallenge}
        type="secondary"
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
    alignSelf: 'center'
  },
  welcomeLogoImage: {
    width: 125,
    height: 139,
    marginTop: 40,
    alignSelf: 'center'
  },
  welcomeText: {
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: FontSizes.h.large,
    marginTop: 30,
    alignSelf: 'center',
    color: 'black'
  },
  welcomeDescText: {
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: FontSizes.h.regular,
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