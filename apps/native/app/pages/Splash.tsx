import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import XTriviaLogo from '@images/svgs/x-logo.svg'
import { FontNames } from '@app/theme/fonts';
import { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';

const SplashScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  const goNext = () => {
    setTimeout(() => {
      navigation.navigate('Auth')
    }, 1000)
  }

  useEffect(() => {
    goNext()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <XTriviaLogo width={50} height={50} />
        <Text style={styles.logoText}>
          trivia
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen

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
  }
})