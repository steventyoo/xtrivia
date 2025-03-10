import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontNames } from '@app/theme/fonts';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '@app/navigation/RootStack';
import { supabase } from '@app/services/supabase';
import TopBar from '@app/components/templates/TopBar';
import PagerView from 'react-native-pager-view';
import ProfileSectionsComponent, { ProfileSection } from './ProfileSectionsComponent';
import ProfileStats from './ProfileStats';
import { useRef, useState } from 'react';

const ProfileScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  const refPagerView = useRef<PagerView>(null)

  const [currentSection, setCurrentSection] = useState<ProfileSection>(ProfileSection.stats)

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
      <TopBar withSettings />
      <ProfileSectionsComponent containerStyle={styles.sectionsPanel} selectedSectionItem={currentSection} onSectionItemClick={item => {
        if (item === ProfileSection.avatars) {
          refPagerView.current?.setPage(1)
        } else if (item === ProfileSection.friends) {
          refPagerView.current?.setPage(2)
        } else if (item === ProfileSection.rank) {
          refPagerView.current?.setPage(3)
        } else {
          refPagerView.current?.setPage(0)
        }
      }} />
      <PagerView ref={refPagerView} style={styles.pagerViewRoot} initialPage={0} onPageSelected={e => {
        const position = e.nativeEvent.position
        if (position === 0) {
          setCurrentSection(ProfileSection.stats)
        } else if (position === 1) {
          setCurrentSection(ProfileSection.avatars)
        } else if (position === 2) {
          setCurrentSection(ProfileSection.friends)
        } else {
          setCurrentSection(ProfileSection.rank)
        }
      }}>
        <View key="1" style={styles.subPagesCommon}>
          <ProfileStats />
        </View>
        <View key="2" style={styles.subPagesCommon}>
          <Text>Avatars page</Text>
        </View>
        <View key="3" style={styles.subPagesCommon}>
          <Text>Friends page</Text>
        </View>
        <View key="4" style={styles.subPagesCommon}>
          <Text>Rank page</Text>
          <TouchableOpacity onPress={handleSignout}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </PagerView>
    </SafeAreaView>
  )
}

export default ProfileScreen

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
  },
  sectionsPanel: {
    marginHorizontal: 16,
    marginTop: 16
  },
  subPagesCommon: {
    marginHorizontal: 16
  },
  pagerViewRoot: { flex: 1, marginTop: 20 }
})