import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../pages/Splash";
import AuthStack from "./AuthStack";
import MainBottomTabNavigator from "./MainBottomTabNavigator";

export type RootStackParamsList = {
  Splash: undefined,
  Auth: undefined,
  Main: undefined
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
    </Stack.Navigator>
  )
}

export default RootStack