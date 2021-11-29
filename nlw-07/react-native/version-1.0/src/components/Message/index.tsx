import React from 'react';
import { View, Text } from 'react-native';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

const Message: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>

      <View>
        <UserPhoto
          imageUri="https://github.com/felipepichl.png"
          sizes="SMALL"
        />

        <Text style={styles.userName}>Felipe Pichl</Text>
      </View>
    </View>
  );
};

export { Message };
