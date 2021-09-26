import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>

          <Text>Felipe Pichl</Text>
        </View>
        <Text style={styles.message}>Today, Is day for win</Text>
      </View>
    </View>
  );
};

export { Profile };
