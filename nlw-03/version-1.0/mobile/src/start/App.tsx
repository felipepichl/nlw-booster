import { AppLoading, registerRootComponent } from 'expo';
import React from 'react';

import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import Routes from '../routes';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
};
registerRootComponent(App);

export default App;
