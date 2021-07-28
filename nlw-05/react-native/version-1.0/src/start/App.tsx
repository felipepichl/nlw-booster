import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={style.container}>
      <Text>Hello my friend</Text>
    </View>
  );
};

registerRootComponent(App);

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
