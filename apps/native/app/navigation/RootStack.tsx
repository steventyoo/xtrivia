import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../pages/Splash";
import AuthStack from "./AuthStack";

export type RootStackParamsList = {
  Splash: undefined,
  Auth: undefined
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
    </Stack.Navigator>
  )
}

export default RootStack