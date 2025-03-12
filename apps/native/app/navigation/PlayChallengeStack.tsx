import { createStackNavigator } from "@react-navigation/stack";
import PlayChallengeStartScreen from "@app/pages/challenge/PlayChallengeStartScreen";

export type DailyChallengeStackParamsList = {
  DailyChallengeStartScreen: undefined,  
}

const Stack = createStackNavigator<DailyChallengeStackParamsList>();

const PlayChallengeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="DailyChallengeStartScreen" component={PlayChallengeStartScreen} />      
    </Stack.Navigator>
  )
}

export default PlayChallengeStack