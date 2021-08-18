import { registerRootComponent } from 'expo';
import React from 'react';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import { UserIdentification } from '../pages/UserIdentification';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <UserIdentification />;
};

registerRootComponent(App);

export default App;
