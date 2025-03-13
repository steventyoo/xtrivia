import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@app/components/Logo';
import { Image } from 'expo-image';

const PlayChallengeStartScreen = () => {

  return (
    <SafeAreaView style={styles.container}>      
      <View style={styles.mainContentContainer}>
        <Image source={require('@assets/animations/daily-challenge-start.gif')} style={{ width: 267, height: 267 }}/>
      </View>
      <Logo containerStyle={styles.logoContainer} iconSize={25} textSize={25} />      
    </SafeAreaView>
  )
}

export default PlayChallengeStartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginBottom: 60,
    alignSelf: 'center'
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})