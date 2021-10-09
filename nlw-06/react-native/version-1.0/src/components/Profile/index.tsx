import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';

import { styles } from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/felipepichl.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>

          <Text style={styles.username}>Felipe Pichl</Text>
        </View>
        <Text style={styles.message}>Today, Is day for win</Text>
      </View>
    </View>
  );
};

export { Profile };
