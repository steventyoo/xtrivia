import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "@app/pages/auth/AuthScreen";
import RegisterScreen from "@app/pages/auth/RegisterScreen";
import CodeVerificationScreen from "@app/pages/auth/CodeVerificationScreen";
import PlayerIdCreateScreen from "@app/pages/auth/PlayerIdCreateScreen";

export type AuthStackParamsList = {
  AuthScreen: undefined,
  RegisterScreen: undefined,
  CodeVerificationScreen: { phone: string },
  PlayerIdCreateScreen: undefined
}

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} />
      <Stack.Screen name="PlayerIdCreateScreen" component={PlayerIdCreateScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack