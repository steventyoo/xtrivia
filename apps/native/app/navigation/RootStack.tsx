import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../pages/Splash";
import AuthStack from "./AuthStack";
import MainBottomTabNavigator from "./MainBottomTabNavigator";
import PlayChallengeStack from "./PlayChallengeStack";

export type RootStackParamsList = {
  Splash: undefined,
  Auth: undefined,
  Main: undefined,
  Challenge: undefined
}

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          animation: 'fade'
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainBottomTabNavigator}
      />
      <Stack.Screen
        name="Challenge"
        component={PlayChallengeStack}
        options={{
          animation: 'reveal_from_bottom'
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack