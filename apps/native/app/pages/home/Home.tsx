import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@app/components/Logo';
import { FontNames } from '@app/theme/fonts';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';
import { supabase } from '@app/services/supabase';
import ProfileSummaryView from '@app/components/templates/ProfileSummaryView';
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
  title: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center'
  },  
  carousel: {
    alignSelf: 'center',
    marginTop: 80,
  }
})