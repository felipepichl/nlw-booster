import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../styles/colors';

const PlantSelect: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Selecionar Planta</Text>
    </View>
  );
};

export { PlantSelect };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
