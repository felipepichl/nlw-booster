import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const AppointmentDetails: React.FC = () => {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="shared" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
    </Background>
  );
};

export { AppointmentDetails };
