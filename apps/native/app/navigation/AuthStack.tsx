import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "@app/pages/auth/AuthScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack