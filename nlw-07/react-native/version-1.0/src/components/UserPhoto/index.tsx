import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

const UserPhoto: React.FC = () => {
  return (
    <Image
      source={{ uri: 'https://github.com/felipepichl.png' }}
      style={styles.container}
    />
  );
};

export { UserPhoto };
