import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Header };
