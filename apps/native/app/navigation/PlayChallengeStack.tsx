import { createStackNavigator } from "@react-navigation/stack";
import PlayChallengeStartScreen from "@app/pages/challenge/PlayChallengeStartScreen";
import PlayChallengeScreen from "@app/pages/challenge/PlayChallengeScreen";

export type DailyChallengeStackParamsList = {
  DailyChallengeStartScreen: undefined,
  PlayChallengeScreen: undefined
}

const Stack = createStackNavigator<DailyChallengeStackParamsList>();

const PlayChallengeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="DailyChallengeStartScreen" component={PlayChallengeStartScreen} />
      <Stack.Screen name="PlayChallengeScreen" component={PlayChallengeScreen} />
    </Stack.Navigator>
  )
}

export default PlayChallengeStack