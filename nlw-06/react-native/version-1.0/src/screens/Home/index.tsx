import React from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  );
};

export { Home };
