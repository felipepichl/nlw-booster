import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Background } from '../components/Background';
import { SignIn } from '../screens/SignIn';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </Background>
  );
};

registerRootComponent(App);

export default App;
