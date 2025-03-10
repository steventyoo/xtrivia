import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@app/pages/home/Home";
import ProfileScreen from "@app/pages/profile/Profile";

export type HomeStackParamsList = {
  HomeScreen: undefined,
  ProfileScreen: undefined
}

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
        animation: 'fade'
      }} />
    </Stack.Navigator>
  )
}

export default HomeStack