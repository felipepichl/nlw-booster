import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './styles';

const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasChackBox
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select} />
        </RectButton>
      </View>
    </Background>
  );
};

export { AppointmentCreate };
