import { StyleSheet, View, Text, FlatList } from 'react-native';
import ProfileSummaryView from '@app/components/templates/ProfileSummaryView';
import ClockTimer from '@app/components/ClockTimer';
import DotProgressBar from '@app/components/DotProgressBar';
import { Colors } from '@app/theme/colors';
import { Fonts, FontSizes } from '@app/theme/fonts';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypingAnswerBar from './TypingAnswerBar';
import { _mock_daily_quiz_ } from '@app/models/mocks/__quiz_mock__';
import AnswerItemView from './AnswerItemView';
import { findHintForAnswer, HintType } from '@app/models/Quiz';

const countDownStart = 180

export enum PlayStatus {
  noHint = 0,
  lengthHinted = 1,
  firstCharacterHinted = 2,
  lastCharacterHinted = 3,
  softHinted = 4,
  strongerHinted = 5,
  last10Seconds = 6,
  ended = 7
}

const PlayChallengeScreen = () => {

  const [timer, setTimer] = useState(0)
  const [hintSelectionRow, setHintSelectionRow] = useState(0);
  const [typedAnswerText, setTypedAnswerText] = useState("")

  const [answersMatched, setAnswersMatched] = useState<number[]>([])

  const quiz = _mock_daily_quiz_

  const timerIntervalRef = useRef<NodeJS.Timeout>()
  const timerRef = useRef(0)
  const prevIntervalTimeRef = useRef<Date>(new Date())

  const finishCountDownTimer = () => {
    timerRef.current = countDownStart
    setTimer(countDownStart)
    clearInterval(timerIntervalRef.current)
  }

  const triggerSoftHint = () => {
    for (let i = 0; i <= 10; i++) {
      if (!answersMatched.includes(i)) {
        setHintSelectionRow(i)
        return
      }
    }
  }

  const moveTimer = (seconds: number) => {
    const newTimer = timerRef.current + seconds

    if (timerRef.current >= 60 && newTimer < 60) {
      triggerSoftHint()
    }

    setTimer(newTimer)
    timerRef.current = newTimer
  }

  const handleTimer = () => {
    const seconds = (new Date().getTime() - prevIntervalTimeRef.current.getTime()) / 1000

    prevIntervalTimeRef.current = new Date()
    if (seconds + timerRef.current >= countDownStart) {
      finishCountDownTimer()
    } else {
      moveTimer(seconds)
    }
  }

  const handleFastForward = () => {
    if (timerRef.current + 10 >= countDownStart) {
      finishCountDownTimer()
    } else {
      moveTimer(10)
    }    
  }

  const startTimer = () => {
    timerRef.current = 0
    prevIntervalTimeRef.current = new Date()
    timerIntervalRef.current = setInterval(handleTimer, 100)
  }

  const handleTypedAnswer = () => {
    // TODO:  Need to use LLM to check if answer is correct
    // At the moment, just checking text including
    if (typedAnswerText.length > 3) {
      const answerIndex = quiz.answers.findIndex(answer => answer.answer.toLowerCase().includes(typedAnswerText.toLowerCase()))    
      if (answerIndex >= 0) {
        setAnswersMatched([...answersMatched, answerIndex])
      }
    }
    setTypedAnswerText("")
  }

  const handleNextHint = () => {
    setHintSelectionRow((hintSelectionRow + 1) % 10)
  }

  const handlePrevHint = () => {
    if (hintSelectionRow > 0) {
      setHintSelectionRow(hintSelectionRow - 1)
    } else {
      setHintSelectionRow(9)
    }
  }

  const playingStatus = useMemo(() => {
    const tm = countDownStart - timer 
    if (tm > 150) {
      return PlayStatus.noHint
    } else if (tm > 120) {
      return PlayStatus.lengthHinted
    } else if (tm > 90) {
      return PlayStatus.firstCharacterHinted
    } else if (tm > 60) {
      return PlayStatus.lastCharacterHinted
    } else if (tm > 30) {
      return PlayStatus.softHinted
    } else if (tm > 20) {
      return PlayStatus.strongerHinted
    } else if (tm > 0) {
      return PlayStatus.last10Seconds
    } else {
      return PlayStatus.ended
    }
  }, [timer])

  const prevNextHintButtonAvailable = useMemo(() => {
    return answersMatched.length < 9
  }, [answersMatched])

  useEffect(() => {
    startTimer()

    return () => {
      clearInterval(timerIntervalRef.current)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <ProfileSummaryView />
        <View style={{ flex: 1 }} />
        <View style={{ alignItems: 'flex-end' }}>
          <ClockTimer timeInSeconds={countDownStart - timer} isRedAlert={(countDownStart - timer) < 10} />
          <DotProgressBar style={styles.dotsProgressBar} dots={6 - Math.floor(timer / (countDownStart / 6))} />
        </View>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          THE TOP 10
        </Text>
        <Text style={styles.titleText}>
          {quiz.title.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.descriptionText}>
        {quiz.description}
      </Text>
      {!!quiz.sub_info_description && (
        <Text style={styles.subInfoDescColumnView}>
          {quiz.sub_info_description}
        </Text>
      )}
      <FlatList
        style={{ flex: 1 }}
        data={quiz.answers}
        extraData={answersMatched}
        keyboardShouldPersistTaps="always"
        renderItem={({item, index}) => (
          <AnswerItemView
            answer={item}
            hintRow={playingStatus >= PlayStatus.softHinted && index === hintSelectionRow}
            playingStep={playingStatus}
            isAnswerTyped={answersMatched.includes(index)}
            onPress={() => {
              if (playingStatus >= PlayStatus.softHinted) {
                setHintSelectionRow(index)
              }
            }}
          />
        )}
      />
      <TypingAnswerBar
        onFastForwardClick={handleFastForward}
        inputText={typedAnswerText}
        setInputText={setTypedAnswerText}
        onAnswerTyped={handleTypedAnswer}
        nextHintButtonAvailable
        prevHintButtonAvailable
        onNextHint={handleNextHint}
        onPrevHint={handlePrevHint}
        hintText={playingStatus === PlayStatus.softHinted ? 
          findHintForAnswer(quiz.answers[hintSelectionRow], HintType.soft) 
          : playingStatus >= PlayStatus.strongerHinted ? findHintForAnswer(quiz.answers[hintSelectionRow], HintType.strong) : ""}
        containerStyle={{
        }}
      />
    </SafeAreaView>
  )
}

export default PlayChallengeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  topBar: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
  },
  dotsProgressBar: {
    marginTop: 10,
  },
  titleView: {
    marginHorizontal: 16,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 16,
    backgroundColor: Colors.blue.primary,
    alignItems: 'center'
  },
  titleText: {
    fontSize: FontSizes.body.medium,
    color: 'white'
  },
  descriptionText: {
    fontFamily: Fonts.RobotoMono.italic,
    fontSize: FontSizes.body.extrasmall,
    marginHorizontal: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 16,
  },
  subInfoDescColumnView: {
    marginHorizontal: 16,
    alignSelf: 'flex-end',
    fontFamily: Fonts.RobotoMono.redular,
    fontSize: FontSizes.body.extrasmall,
  }
})