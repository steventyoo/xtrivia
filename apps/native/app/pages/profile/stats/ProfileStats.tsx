import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated, ScrollView } from 'react-native'
import IconTrophy from '@assets/images/svgs/icon-trophy.svg'
import IconXLogo from '@assets/images/svgs/x-logo.svg'
import { Colors } from '@app/theme/colors'
import { Categories } from '@app/models/BusinessConstants'
import { FontSizes } from '@app/theme/fonts'

const scoresForCategories: { [key: string]: number } = {
  general: 8.52,
  tech_science: 3,
  sports: 9.21,
  history: 9.42,
  geography: 0,
  music_media: 5.43,
  economy: 2,
  music_movies: 0,
  animals: 3.2,
  food_drink: 3,
  pop_culture: 1,
  dark_mode: 2,
}


const ProfileStats = () => {

  const scoreAnimation = useRef(new Animated.Value(0)).current

  const [myPoints, setMyPoints] = useState(0)
  const [scoreContainerWidth, setScoreContainerWidth] = useState(0)

  const startScoreAnimation = () => {
    Animated.timing(scoreAnimation, {
      toValue: (myPoints / 10.0) * scoreContainerWidth,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
    });

  }

  useEffect(() => {
    if (scoreContainerWidth > 0) {
      startScoreAnimation()
    }
  }, [scoreContainerWidth, myPoints])

  useEffect(() => {
    setMyPoints(7.2)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gamesPlayedRow}>
        <IconTrophy width={25} height={25} />
        <Text style={styles.gamesPlayedText}>
          games played: 341
        </Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.infoButton}>
          <Image style={styles.infoIcon} source={require('@assets/images/img-info.png')} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.scoreRow}>
        <IconXLogo width={25} height={25} />
        <View onLayout={(e) => {
          setScoreContainerWidth(e.nativeEvent.layout.width);
        }}
          style={styles.pointsContainer}>
          <Animated.View style={[styles.pointsView, { width: scoreAnimation }]} />
        </View>
        <Text style={styles.gamesPlayedText}>
          {myPoints.toFixed(2)}
        </Text>
      </View>
      <View style={styles.categoryView}>
        <Text style={styles.categoryText}>
          category ratings
        </Text>
        {Object.keys(scoresForCategories).map(categorySlug => {
          const category = Categories.find(cat => cat.slug === categorySlug)
          if (category) {
            const IconComponent = category.icon
            return (<View style={styles.categoryItem} key={category.slug}>
              <IconComponent width={25} height={25} />
              <View style={styles.pointsContainer}>
                <View style={[styles.categoryPointsView, { width: `${(scoresForCategories[category.slug] ?? 0) * 9 + 10}%` }]} />
                <Text style={{ ...styles.categoryText, marginLeft: 10 }}>
                  {category.text}
                </Text>
              </View>
              <Text style={styles.categoryText}>
                {(scoresForCategories[category.slug] ?? 0).toFixed(2)}
              </Text>
            </View>)
          } else {
            return null
          }
        })}
      </View>
      <View style={styles.streakView}>
        <View style={styles.categoryItem}>
          <Image source={require('@assets/images/img-current-streak.png')} resizeMode='contain' style={styles.itemImage} />
          <View style={styles.pointsContainer}>
            <Text style={{ ...styles.categoryText, marginLeft: 10 }}>
              current streak: 12 games
            </Text>
          </View>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('@assets/images/img-max-streak.png')} resizeMode='contain' style={styles.itemImage} />
          <View style={styles.pointsContainer}>
            <Text style={{ ...styles.categoryText, marginLeft: 10 }}>
              max streak: 91 games
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileStats

const styles = StyleSheet.create({
  container: {
    height: '100%',    
  },
  gamesPlayedRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  gamesPlayedText: {
    fontSize: FontSizes.body.medium,
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold'
  },
  infoButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoIcon: {
    width: 20,
    height: 20
  },
  pointsContainer: {
    flex: 1,
    marginLeft: 10,
    height: 20,
    alignItems: 'flex-start',
  },
  pointsView: {
    backgroundColor: Colors.blue.primary,
    height: 20,
    width: '100%',
    borderRadius: 10
  },
  categoryView: {
    marginTop: 20
  },
  categoryText: {
    fontSize: FontSizes.body.small,
    color: 'black'
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  categoryPointsView: {
    backgroundColor: Colors.gray[80],
    height: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    borderRadius: 10
  },
  streakView: {
    marginTop: 30
  },
  itemImage: {
    width: 25,
    height: 25
  }
})