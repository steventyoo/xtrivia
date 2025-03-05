import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStack'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { FontNames } from './theme/fonts';

SplashScreen.preventAutoHideAsync();

export default function AppScreenRoot() {

  const [loaded, error] = useFonts({
    [FontNames.InconsolataBold]: require('@assets/fonts/Inconsolata-Bold.ttf'),
    [FontNames.Inconsolata]: require('@assets/fonts/Inconsolata-Regular.ttf'),
    "TwemojiMozilla": require('@assets/fonts/TwemojiMozilla.ttf'),
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