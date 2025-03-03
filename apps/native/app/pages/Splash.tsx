import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';
import Logo from '@app/components/Logo';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  const goNext = () => {

    // TODO:
    // Initializing processes, such as initial data loading, local storage and database cleaning codes should be here
    // Also, should add Lottie animation to show initial loading spinner while doing above things.
    // At the moment, skipping these steps,  just go to next page after 1 sec
    setTimeout(() => {
      navigation.navigate('Auth')
    }, 2000)
  }

  useEffect(() => {
    goNext()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} />
      <View style={{ flex: 1 }} />
      <View style={styles.spinnerContainer}>
        <LottieView
          autoPlay
          style={styles.lottieSpinner}
          source={require('@assets/animations/spinner.json')}
        />
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
    alignSelf: 'center'
  },
  spinnerContainer: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  lottieSpinner: {
    width: 200,
    height: 150
  }
})