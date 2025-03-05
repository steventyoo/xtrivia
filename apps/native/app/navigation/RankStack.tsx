import { createStackNavigator } from "@react-navigation/stack";
import RankScreen from "@app/pages/rank/Rank";

export type RankStackParamsList = {
  RankScreen: undefined,  
}

const Stack = createStackNavigator<RankStackParamsList>();

const RankStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="RankScreen" component={RankScreen} />      
    </Stack.Navigator>
  )
}

export default RankStack