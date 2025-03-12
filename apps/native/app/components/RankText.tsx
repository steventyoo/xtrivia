import { Colors } from '@app/theme/colors';
import { FontNames } from '@app/theme/fonts';
import React, { FC } from  'react'
import { Image, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

type Props = {
  textStyle?: TextStyle | ViewStyle;
  rank: number
}

const RankText: FC<Props> = ({
  textStyle,
  rank
}) => {
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
          source={rank === 1 ? require('@assets/images/img-rank-1.png') : rank === 2 ? require('@assets/images/img-rank-2.png') : require('@assets/images/img-rank-3.png')}
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
    fontSize: 12,
    color: 'black'
  },
  rankedText: {
    fontFamily: FontNames.InconsolataBold,
    fontSize: 12,
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