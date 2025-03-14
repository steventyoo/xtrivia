import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@app/components/Logo';
import { Fonts } from '@app/theme/fonts';

const XFilesScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} />
      <Text style={styles.title}>
        x files screen
      </Text>
    </SafeAreaView>
  )
}

export default XFilesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginTop: 60,
    alignSelf: 'center'
  },
  title: {
    fontFamily: Fonts.Inconsolata.regular,
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center'
  }
})