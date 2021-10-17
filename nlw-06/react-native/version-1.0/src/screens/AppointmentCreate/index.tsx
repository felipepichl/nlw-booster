import React from 'react';
import { Text, View } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';

const AppointmentCreate: React.FC = () => {
  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}>Categoria</Text>
    </Background>
  );
};

export { AppointmentCreate };
