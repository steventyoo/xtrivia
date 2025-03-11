import { animals } from '@app/models/BusinessConstants';
import { Colors } from '@app/theme/colors'
import React, { FC, useState } from 'react'
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
  containerStyle?: ViewStyle;
  onAnimalSelected?: (slug: string) => void;
}



const SpiritAnimalSelector: FC<Props> = ({
  containerStyle,
  onAnimalSelected
}) => {

  const [selectedItemSlug, setSelectedItemSlug] = useState('dog')

  const handleItemPress = (slug: string) => {
    if (slug !== selectedItemSlug) {
      setSelectedItemSlug(slug)

      onAnimalSelected?.(slug)
    }
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {animals.map(animal => {

        const IconComponent = animal.image
        return (
          <Pressable onPress={() => handleItemPress(animal.slug)} key={animal.slug} style={[styles.animalItemContainer, selectedItemSlug === animal.slug ? { backgroundColor: Colors.yellow[100] } : null]}>
            <IconComponent width={50} height={50}/>
          </Pressable>
      )})}
      
    </View>
  )
}

export default SpiritAnimalSelector

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  animalItemContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animalItemImage: {
    width: 50,
    height: 50
  }
})
