import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@app/components/Logo';
import { FontNames } from '@app/theme/fonts';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';
import { supabase } from '@app/services/supabase';
import ProfileSummaryView from '@app/components/templates/ProfileSummaryView';
import HomeButtonsCarousel from '@app/components/templates/HomeButtonsCarousel';

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      navigation.dispatch(StackActions.replace('Auth'))
      console.log('User signed out successfully');
    }    
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProfileSummaryView containerStyle={styles.homeProfilePanel}/>
      <HomeButtonsCarousel containerStyle={styles.carousel} />
      <TouchableOpacity onPress={handleSignout}>
        <Text style={{ alignSelf: 'center', marginTop: 30 }}>
          Sign out
        </Text>
      </TouchableOpacity>
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
  homeProfilePanel: {
    marginLeft: 20
  },
  carousel: {
    alignSelf: 'center',
    marginTop: 80,
  }
})