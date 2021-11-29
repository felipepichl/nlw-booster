import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://github.com/felipepichl.png" />
      </View>
    </View>
  );
};

export { Header };
