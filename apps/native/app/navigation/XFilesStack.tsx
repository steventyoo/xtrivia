import { createStackNavigator } from "@react-navigation/stack";
import XFilesScreen from "@app/pages/xfiles/XFiles";

export type XFilesStackParamsList = {
  XFilesScreen: undefined,  
}

const Stack = createStackNavigator<XFilesStackParamsList>();

const XFilesStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="XFilesScreen" component={XFilesScreen} />      
    </Stack.Navigator>
  )
}

export default XFilesStack