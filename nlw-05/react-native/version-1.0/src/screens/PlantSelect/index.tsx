import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

const PlantSelect: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text>Selecionar Planta</Text> */}
    </View>
  );
};

export { PlantSelect };
