import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./HomeStack"
import XFilesStack from "./XFilesStack"
import BottomTabBar from "./BottomTabBar"
import XListStack from "./XListStack"
import RankStack from "./RankStack"

export type MainBottomTabParamsList = {
  Home: undefined,
  XFiles: undefined,
  XList: undefined,
  Rank: undefined
}

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamsList>()

const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
      <MainBottomTab.Screen name="Home" component={HomeStack} />
      <MainBottomTab.Screen name="XFiles" component={XFilesStack} />
      <MainBottomTab.Screen name="XList" component={XListStack} />
      <MainBottomTab.Screen name="Rank" component={RankStack} />
    </MainBottomTab.Navigator>
  )
}

export default MainBottomTabNavigator