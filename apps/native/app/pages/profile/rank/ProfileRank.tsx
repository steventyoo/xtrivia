import { Colors } from '@app/theme/colors'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import IconXLogo from '@assets/images/svgs/x-logo.svg'
import IconTrophy from '@assets/images/svgs/icon-trophy.svg'
import { supabase } from '@app/services/supabase'
import { Profile } from '@app/models/Profile'
import RankText from '@app/components/RankText'
import { animals } from '@app/models/BusinessConstants'
import { useAuth } from '@app/hooks/AuthProvider'
import { FontSizes } from '@app/theme/fonts'

const ProfileRank = () => {

  const { authUserId } = useAuth()

  const [loadedProfiles,  setLoadedProfiles] = useState<Profile[]>([])

  const loadProfiles = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .not('username', 'is', null)
      .order('x_score', { ascending: false })
    setLoadedProfiles(data as Profile[])
  }

  useEffect(() => {
    loadProfiles()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerColumnRow}>
        <View style={{ width: 30 }} />
        <View style={{ width: 30 }} />
        <View style={{ flex: 1 }} />
        <View style={{ width: 44, height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <IconXLogo width={15} height={15} />
        </View>
        <View style={{ width: 44, height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <IconTrophy width={15} height={15} />
        </View>
      </View>
      <FlatList
        data={loadedProfiles}
        renderItem={({item, index}) => {

          const avatar = item.avatar

          const AvatarIconComponent = animals.find(animal => animal.slug === avatar)?.image

          return (
            <View style={[styles.itemRow, item.id === authUserId ? styles.myRow : {}]}>
              <View style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
                <RankText rank={index + 1} />
              </View>
              <View style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
                {AvatarIconComponent ? (<AvatarIconComponent width={20} height={20} />) : <Image source={require('@assets/images/octupus.png')} style={{ width: 20, height: 20 }} />}
              </View>
              <View style={{ flex: 1, paddingLeft: 16 }}>
                <Text style={styles.textItem}>{item.username}</Text>
              </View>
              <View style={{ width: 44, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.textItem}>{item.x_score.toFixed(2)}</Text>
              </View>
              <View style={{ width: 44, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.textItem}>{item.plays}</Text>
              </View>
            </View>
          )}
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ProfileRank

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  headerColumnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[40]
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',    
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[40],    
  },
  myRow: {
    borderRadius: 20,
    backgroundColor: Colors.gray[80],
    borderBottomWidth: 0
  },
  textItem: {
    fontSize: FontSizes.body.small
  }
})