import { useFonts } from 'expo-font';
import AppScreenRoot from './app/AppScreenRoot';

export default function App() {

  useFonts({
    'TwemojiMozilla': require('@assets/fonts/TwemojiMozilla.woff2'),
  });

  return (
    <AppScreenRoot />
  );
}