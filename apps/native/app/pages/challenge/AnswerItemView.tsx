import { Answer, findHintForAnswer, HintType } from '@app/models/Quiz'
import { PlayStatus } from './PlayChallengeScreen'
import { StyleSheet, Text, Pressable } from 'react-native'
import { FC, useMemo } from 'react'
import { Fonts, FontSizes } from '@app/theme/fonts'
import { Colors } from '@app/theme/colors'

type Props = {
  answer: Answer,
  hintRow?: boolean,
  isAnswerTyped: boolean,
  playingStep: PlayStatus,
  onPress?: () => void
}

const AnswerItemView: FC<Props> = ({
  answer,
  hintRow,
  isAnswerTyped,
  playingStep,
  onPress
}) => {

  const answerText = useMemo(() => {
    if (isAnswerTyped) {
      return answer.answer
    } else {
      if (playingStep === PlayStatus.noHint) {
        return ""
      } else if (playingStep === PlayStatus.lengthHinted) {
        return findHintForAnswer(answer, HintType.length)
      } else if (playingStep === PlayStatus.firstCharacterHinted) {
        return findHintForAnswer(answer, HintType.firstCharacter)
      } else if (playingStep === PlayStatus.ended) {
        return answer.answer
      } else {
        return findHintForAnswer(answer, HintType.lastCharacter)
      }
    }
  }, [answer, playingStep, isAnswerTyped])

  return (
    <Pressable onPress={onPress} style={{...styles.container, backgroundColor: hintRow ? Colors.yellow[25] : 'transparent'}}>
      <Text style={styles.index}>
        {answer.answer_index}.
      </Text>
      <Text style={{...styles.answer, color: !isAnswerTyped && playingStep === PlayStatus.ended ? Colors.red[95] : 'black' }}>
        {answerText}
      </Text>
      <Text style={styles.subInfo}>
        {(isAnswerTyped || playingStep === PlayStatus.ended) ? answer.sub_info_value :  ""}
      </Text>
    </Pressable>
  )
}

export default AnswerItemView

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 3,
  },
  index: {
    width: 40,
    fontFamily: Fonts.RobotoMono.redular,
    fontSize: FontSizes.body.large,
    textAlign: 'right'
  },
  answer: {
    flex: 1,
    fontFamily: Fonts.RobotoMono.redular,
    fontSize: FontSizes.body.large,
  },
  subInfo: {
    fontFamily: Fonts.RobotoMono.redular,
    fontSize: FontSizes.body.large,
  }
})
