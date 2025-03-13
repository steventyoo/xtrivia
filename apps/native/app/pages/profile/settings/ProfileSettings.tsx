import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontNames, FontSizes } from '@app/theme/fonts';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import TopBar from '@app/components/templates/TopBar';
import { useState } from 'react';
import { HomeStackParamsList } from '@app/navigation/HomeStack';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '@app/theme/colors';
import { useAuth } from '@app/hooks/AuthProvider';
import SwitchButton from '@app/components/buttons/SwitchButton';
import { supabase } from '@app/services/supabase';
import ButtonSpinner from '@app/components/ButtonSpinner';
import { convertDatabaseTimeToDateFormat } from '@app/utils/timeUtils';

const ProfileSettingsScreen = () => {

  const { authProfile } = useAuth()

  const [hideScore, setHideScore] = useState(false)
  const [turnOffNotifications, setTurnOffNotifications] = useState(false)

  const [loggingOut, setLoggingOut] = useState(false)

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

  const handleSignout = async () => {
    setLoggingOut(true)
    const { error } = await supabase.auth.signOut();
    setLoggingOut(false)
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      navigation.dispatch(StackActions.replace('Auth'))
      console.log('User signed out successfully');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar onProfilePress={() => navigation.goBack()} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.titleBarView}>
          <Image source={require('@assets/images/img-settings.png')} style={styles.settingsIcon} />
          <Text style={styles.settingsTitle}>settings</Text>
        </View>
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>account info</Text>
        </View>
        <View style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-player-id.png')} />
          <Text style={styles.infoText}>{authProfile?.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <SwitchButton
            isOn={hideScore}
            onChangeValue={setHideScore}
          />
          <Text style={styles.infoText}>hide x score</Text>
        </View>
        <View style={styles.infoRow}>
          <SwitchButton
            isOn={turnOffNotifications}
            onChangeValue={setTurnOffNotifications}
          />
          <Text style={styles.infoText}>turn off notifications</Text>
        </View>
        <View style={styles.infoRow}>
          <SwitchButton isOn={false} />
          <Text style={styles.infoText}>google account connect</Text>
        </View>
        {Platform.OS === 'ios' && (
          <View style={styles.infoRow}>
            <SwitchButton isOn={false} />
            <Text style={styles.infoText}>apple account connect</Text>
          </View>
        )}
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>app info</Text>
        </View>
        <TouchableOpacity style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-report-bug.png')} />
          <Text style={styles.infoText}>report a bug</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-contact-us.png')} />
          <Text style={styles.infoText}>contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-terms.png')} />
          <Text style={styles.infoText}>terms and conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-privacy.png')} />
          <Text style={styles.infoText}>privacy policy</Text>
        </TouchableOpacity>
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>follow us</Text>
        </View>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-instagram.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-tiktok.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-twitter.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-reddit.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIconImages}>
            <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-youtube.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Image style={styles.infoIconImages} source={require('@assets/images/icon-img-location-pin.png')} />
          <Text style={styles.infoText}>joined {convertDatabaseTimeToDateFormat(authProfile?.created_at)}</Text>
        </View>
        <View style={styles.dangerButtons}>
          <TouchableOpacity onPress={handleSignout} style={styles.dangerButton}>
            {loggingOut ? (
              <ButtonSpinner spinnerSize={26} color="black" />
            ) : (
              <Text style={styles.infoText}>log out</Text>
            )}
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity style={styles.dangerButton}>
            <Text style={styles.infoText}>delete account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProfileSettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  settingsIcon: {
    width: 25,
    height: 25
  },
  settingsTitle: {
    fontFamily: FontNames.Inconsolata,
    fontSize: FontSizes.h2,
    marginLeft: 10
  },
  sectionView: {
    height: 28,
    borderRadius: 30,
    backgroundColor: Colors.blue.lighter,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  sectionText: {
    color: 'black',
    fontSize: FontSizes.body
  },
  infoRow: {
    marginLeft: 16,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center'
  },
  infoIconImages: {
    width: 25,
    height: 25
  },
  infoText: {
    marginLeft: 10,
    fontSize: FontSizes.body,
    color: 'black'
  },
  socialIcons: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
  },
  dangerButtons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  dangerButton: {
    height: 26,
    width: 140,
    borderRadius: 50,
    backgroundColor: Colors.red[90],
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottieSpinner: {
    width: 26,
    height: 26,
  }
})