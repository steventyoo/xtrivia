import { Colors } from "@app/theme/colors";
import { FontNames } from "@app/theme/fonts";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBarItems: {[key: string]: {iconNormal: ImageSourcePropType, iconActive: ImageSourcePropType, title: string}} = {
  Home: {
    iconNormal: require('@assets/images/icon-tab-home-normal.png'),
    iconActive: require('@assets/images/icon-tab-home-active.png'),
    title: 'home'
  },
  XFiles: {
    iconNormal: require('@assets/images/icon-tab-xfiles-normal.png'),
    iconActive: require('@assets/images/icon-tab-xfiles-active.png'),
    title: 'x files'
  },
  XList: {
    iconNormal: require('@assets/images/icon-tab-xlist-normal.png'),
    iconActive: require('@assets/images/icon-tab-xlist-active.png'),
    title: 'x list'
  },
  Rank: {
    iconNormal: require('@assets/images/icon-tab-rank-normal.png'),
    iconActive: require('@assets/images/icon-tab-rank-active.png'),
    title: 'rank'
  }
}
  
const BottomTabBar = (props:BottomTabBarProps) => {

  const { state, descriptors, navigation } = props

  const { bottom } = useSafeAreaInsets()

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              style={styles.itemContainer}
            >
              <Image
                source={isFocused ? tabBarItems[route.name].iconActive : tabBarItems[route.name].iconNormal}
                style={styles.itemImage}
              />
              <Text style={styles.itemText}>
                {tabBarItems[route.name].title}
              </Text>              
            </Pressable>
          );
        })}
      </View>
      <View style={{
        width: '100%',
        height: bottom,
        backgroundColor: 'white'
      }} />
    </View>
  );
}

export default BottomTabBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Colors.gray[95],
    backgroundColor: 'white',
    borderTopWidth: 1,
  },
  itemContainer: {
    flex: 1,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: 25,
    height: 25
  },
  itemText: {
    fontFamily: FontNames.Inconsolata,
    marginTop: 5,
    fontSize: 12
  }
})