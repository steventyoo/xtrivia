import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import TopBar from '@app/components/templates/TopBar';
import PagerView from 'react-native-pager-view';
import ProfileSectionsComponent, { ProfileSection } from './ProfileSectionsComponent';
import ProfileStats from './stats/ProfileStats';
import { useRef, useState } from 'react';
import ProfileAvatarSelector from './avatars/ProfileAvatarSelector';
import ProfileFriends from './friends/ProfileFriends';
import ProfileRank from './rank/ProfileRank';
import { HomeStackParamsList } from '@app/navigation/HomeStack';

const ProfileScreen = () => {

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

  const refPagerView = useRef<PagerView>(null)

  const [currentSection, setCurrentSection] = useState<ProfileSection>(ProfileSection.stats)

  const handleProfileSettings = () => {
    navigation.navigate('ProfileSettingsScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar withSettings onSettingsPress={handleProfileSettings} />
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
          <ProfileAvatarSelector />
        </View>
        <View key="3" style={styles.subPagesCommon}>
          <ProfileFriends />
        </View>
        <View key="4" style={styles.subPagesCommon}>
          <ProfileRank />
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