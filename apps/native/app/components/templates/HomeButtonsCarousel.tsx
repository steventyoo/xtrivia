import { Categories } from "@app/models/BusinessConstants";
import { Colors } from "@app/theme/colors";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import IconAppleFruit from '@assets/images/svgs/icon-apple-fruit.svg'
import { FontNames } from "@app/theme/fonts";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "@app/navigation/RootStack";

type Props = {
  containerStyle?: ViewStyle,
  mainCircleSize?: number
}

const HomeButtonsCarousel: FC<Props> = ({
  mainCircleSize = 150,
  containerStyle
}) => {

  const  navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  return (
    <View style={[styles.container, { width: mainCircleSize * 5 / 3, height: mainCircleSize * 5 / 3}, containerStyle]}>
      {Categories.map((category, index) => {
        const IconComponent = category.icon
        return (
          <TouchableOpacity
            key={`cat-${index}`}
            style={{
              width: mainCircleSize / 6,
              height: mainCircleSize / 6,
              position: 'absolute',
              left: (mainCircleSize * 3 / 4) * Math.sin(Math.PI * 2 / Categories.length * index) + mainCircleSize * 3 / 4,
              top: mainCircleSize * 3 / 4 - (mainCircleSize * 3 / 4) * Math.cos(Math.PI * 2 / Categories.length * index),
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <IconComponent width={mainCircleSize / 6} height={mainCircleSize / 6} />
          </TouchableOpacity>
        )}        
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Challenge')}
        style={{
          width: mainCircleSize,
          height: mainCircleSize,
          position: 'absolute',
          left: mainCircleSize / 3,
          top: mainCircleSize / 3,
          ...styles.mainCircleButton
        }}
      >
        <IconAppleFruit width={mainCircleSize / 6} height={mainCircleSize / 6} />
        <Text style={{...styles.dailyChallenge, width: mainCircleSize / 2}}>
          daily challenge
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeButtonsCarousel

const styles = StyleSheet.create({
  container: {
    position: 'relative',    
  },
  mainCircleButton: {
    borderColor: Colors.blue.primary,
    borderWidth: 10,
    borderRadius: 100,
    backgroundColor: Colors.yellow[100],
    justifyContent: 'center',
    alignItems: 'center'
  },
  dailyChallenge: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.blue.primary,
    marginTop: 10
  }
})

