import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@app/pages/home/Home";
import ProfileScreen from "@app/pages/profile/Profile";
import ProfileSettingsScreen from "@app/pages/profile/settings/ProfileSettings";

export type HomeStackParamsList = {
  HomeScreen: undefined,
  ProfileScreen: undefined,
  ProfileSettingsScreen: undefined
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
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack