import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 },
        ]}
      >
        Categoria
      </Text>

      <CategorySelect
        hasChackBox
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <GuildIcon />

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um Servidor</Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
};

export { AppointmentCreate };
