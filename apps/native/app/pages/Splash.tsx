import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';
import Logo from '@app/components/Logo';
import LottieView from 'lottie-react-native';
import { useAuth } from '@app/hooks/AuthProvider';

const SplashScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()
  const { initialized, session, authProfile } = useAuth()

  useEffect(() => {
    if (initialized) {
      if (session) {
        if (authProfile && !!authProfile.username && !!authProfile.avatar) {
          navigation.dispatch(StackActions.replace('Main'))
        } else {
          navigation.dispatch(StackActions.replace('Auth', { screen: 'PlayerIdCreateScreen' }))
        }        
      } else {
        navigation.dispatch(StackActions.replace('Auth'))
      }      
    }    
  }, [initialized, session])

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