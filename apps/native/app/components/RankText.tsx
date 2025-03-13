import { Colors } from '@app/theme/colors';
import { FontNames, FontSizes } from '@app/theme/fonts';
import React, { FC } from  'react'
import { Image, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

type Props = {
  textStyle?: TextStyle & ViewStyle;
  rank: number
}

const RankText: FC<Props> = ({
  textStyle,
  rank
}) => {

  const getRankImage = () => {
    if (rank === 1) return require('@assets/images/img-rank-1.png');
    if (rank === 2) return require('@assets/images/img-rank-2.png');
    return require('@assets/images/img-rank-3.png');
  };
  

  if (rank > 3) {
    return (
      <Text style={[styles.text, textStyle]}>
        {rank}
      </Text>
    )
  } else {
    return (
      <View style={[styles.topRankedView, textStyle]}>
        <Image
          source={getRankImage()}
          style={styles.topRankImages}
          resizeMode='contain'  
        />
      </View>
    )
  }
  
}

export default RankText

const styles = StyleSheet.create({
  text: {
    fontSize: FontSizes.body,
    color: 'black'
  },
  rankedText: {
    fontFamily: FontNames.InconsolataBold,
    fontSize: FontSizes.body,
    lineHeight: 15,
  },
  topRankedView: {
    width: 15,
    height: 15,
    // borderRadius: 1,
    // borderColor: Colors.blue.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  topRankImages: {
    width: 14,
    height: 14,
  }
})