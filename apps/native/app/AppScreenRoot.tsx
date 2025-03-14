import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStack'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Fonts } from './theme/fonts';

SplashScreen.preventAutoHideAsync();

export default function AppScreenRoot() {

  const [loaded, error] = useFonts({
    [Fonts.Inconsolata.bold]: require('@assets/fonts/Inconsolata-Bold.ttf'),
    [Fonts.Inconsolata.regular]: require('@assets/fonts/Inconsolata-Regular.ttf'),
    "TwemojiMozilla": require('@assets/fonts/TwemojiMozilla.ttf'),
    [Fonts.RobotoMono.bold]: require('@assets/fonts/RobotoMono/RobotoMono-Bold.ttf'),
    [Fonts.RobotoMono.redular]: require('@assets/fonts/RobotoMono/RobotoMono-Regular.ttf'),
    [Fonts.RobotoMono.italic]: require('@assets/fonts/RobotoMono/RobotoMono-Italic.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);


  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}