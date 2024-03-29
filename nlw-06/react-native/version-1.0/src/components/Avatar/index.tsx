import React from 'react';
import { Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface AvatarProps {
  urlImage: string;
}

const Avatar: React.FC<AvatarProps> = ({ urlImage }) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};

export { Avatar };
