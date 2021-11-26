import React from 'react';
import { View, Text } from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <Text style={styles.logoutText}>Sair</Text>
    </View>
  );
};

export { Header };
