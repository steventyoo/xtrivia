import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "@app/pages/auth/AuthScreen";
import RegisterScreen from "@app/pages/auth/RegisterScreen";

export type AuthStackParamsList = {
  AuthScreen: undefined,
  RegisterScreen: undefined
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
    </Stack.Navigator>
  )
}

export default AuthStack