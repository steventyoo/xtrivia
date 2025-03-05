import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@app/pages/home/Home";

export type HomeStackParamsList = {
  HomeScreen: undefined,  
}

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />      
    </Stack.Navigator>
  )
}

export default HomeStack