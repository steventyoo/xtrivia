import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Dimensions, Text } from 'react-native'
import { Colors } from '@app/theme/colors'
import { animals } from '@app/models/BusinessConstants'
import { useAuth } from '@app/hooks/AuthProvider'
import { supabase } from '@app/services/supabase'
import LottieView from 'lottie-react-native'
import { FontSizes } from '@app/theme/fonts'

const ProfileAvatarSelector = () => {

  const { authUserId, authProfile, updateAuthProfile } = useAuth()

  const [selectedItemSlug, setSelectedItemSlug] = useState(authProfile?.avatar ?? 'dog')

  const [uploadingItemSlug, setUploadingItemSlug] = useState('')

  const handleAvatarChange = async (slug: string) => {

    if (slug === selectedItemSlug) {
      return
    }

    setUploadingItemSlug(slug)
    const { data, error } = await supabase
      .from('profiles')
      .upsert(
        [{ id: authUserId, avatar: slug }],
      ).select();
    if (data) {
      updateAuthProfile?.(data[0])
    }

    setUploadingItemSlug('')
    setSelectedItemSlug(slug)
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarsContainer}>
        {animals.map(animal => {
          const IconComponent = animal.image
          return (
            <View style={styles.itemContainer} key={animal.slug}>
              <Pressable
                onPress={() => handleAvatarChange(animal.slug)}
                disabled={!animal.free || uploadingItemSlug !== ""}
                style={[styles.animalItemContainer, selectedItemSlug === animal.slug ? { backgroundColor: Colors.yellow[100] } : null]}
              >
                <IconComponent width={50} height={50} style={{ opacity: animal.free ? 1 : 0.4 }} />
                {animal.slug === uploadingItemSlug && (
                  <LottieView
                    autoPlay
                    style={styles.lottieSpinner}
                    source={require('@assets/animations/dot-spinner.json')}
                    colorFilters={[
                      { keypath: 'Dot 4', color: Colors.yellow[100] },
                      { keypath: 'Dot 3', color: Colors.yellow[100] },
                      { keypath: 'Dot 2', color: Colors.yellow[100] },
                      { keypath: 'Dot 1', color: Colors.yellow[100] }
                    ]}
                  />
                )}
              </Pressable>
              {!animal.free && (
                <Text style={styles.avatarNotes}>
                  invite {animal.unlockFriends} friend to unlock
                </Text>
              )}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ProfileAvatarSelector

const styles = StyleSheet.create({
  container: {
    // flex: 1,    
  },
  avatarsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  animalItemContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animalItemImage: {
    width: 50,
    height: 50
  },
  itemContainer: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarNotes: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: FontSizes.body,
    color: Colors.gray[40]
  },
  lottieSpinner: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 52,
    height: 52,
  }
})