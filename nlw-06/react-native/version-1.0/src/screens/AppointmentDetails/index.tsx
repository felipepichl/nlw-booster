import React from 'react';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';

const AppointmentDetails: React.FC = () => {
  return (
    <Background>
      <Header title="Detalhes" />
    </Background>
  );
};

export { AppointmentDetails };
