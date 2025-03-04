import { Colors } from '@app/theme/colors'
import React, { FC, useState } from 'react'
import { Image, ImageProps, Pressable, StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
  containerStyle?: ViewStyle;
  onAnimalSelected?: (slug: string) => void;
}

const animals: {slug: string, image: ImageProps}[] = [
  {
    slug: 'dog',
    image: require('@assets/images/img-spirit-animal-1.png')
  },
  {
    slug: 'cat',
    image: require('@assets/images/img-spirit-animal-2.png')
  },
  {
    slug: 'mouse',
    image: require('@assets/images/img-spirit-animal-3.png')
  }
]

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
      {animals.map(animal => (
        <Pressable onPress={() => handleItemPress(animal.slug)} key={animal.slug} style={[styles.animalItemContainer, selectedItemSlug === animal.slug ? { backgroundColor: Colors.yellow[100] } : null]}>
          <Image source={animal.image} style={styles.animalItemImage} resizeMode='contain' />
        </Pressable>
      ))}
      
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
