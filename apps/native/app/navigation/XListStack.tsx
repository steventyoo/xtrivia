import { createStackNavigator } from "@react-navigation/stack";
import XListScreen from "@app/pages/xlist/XList";

export type XListStackParamsList = {
  XListScreen: undefined,  
}

const Stack = createStackNavigator<XListStackParamsList>();

const XListStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="XListScreen" component={XListScreen} />      
    </Stack.Navigator>
  )
}

export default XListStack