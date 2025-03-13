import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import HomeButtonsCarousel from '@app/components/templates/HomeButtonsCarousel';
import TopBar from '@app/components/templates/TopBar';
import { HomeStackParamsList } from '@app/navigation/HomeStack';

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

  const handleNavigateToProfile = () => {
    navigation.navigate('ProfileScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar onProfilePress={handleNavigateToProfile} />
      <HomeButtonsCarousel containerStyle={styles.carousel} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginTop: 60,
    alignSelf: 'center'
  },
  carousel: {
    alignSelf: 'center',
    marginTop: 40,
  }
})