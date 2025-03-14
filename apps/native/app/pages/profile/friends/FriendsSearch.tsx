import { Colors } from '@app/theme/colors'
import { FontSizes } from '@app/theme/fonts'
import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import IconClose from '@assets/images/svgs/icon-close.svg'

const FriendsSearch = () => {

  const [searchingText, setSearchingText] = useState("")

  const handleRemoveSearch = () => {
    setSearchingText('')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarRow}>
        <Image
          style={styles.searchIcon}
          source={require('@assets/images/icon-img-yellow-search.png')}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder='search by player id'
            value={searchingText}
            onChangeText={setSearchingText}
            returnKeyType='search'
          />
          {!!searchingText && (
            <TouchableOpacity onPress={handleRemoveSearch} style={styles.searchRemoveButton}>
              <IconClose width={16} height={16} color={Colors.gray[10]} />
            </TouchableOpacity>
          )}
          
        </View>
      </View>
    </View>
  )
}

export default FriendsSearch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    width: 25,
    height: 25
  },
  inputView: {
    marginLeft: 10,
    flex: 1,
    height: 36
  },
  textInput: {
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray[80],
    fontSize: FontSizes.body.large,
    height: 36,
    lineHeight: 20,
    paddingVertical: 0,
  },
  searchRemoveButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  }
})