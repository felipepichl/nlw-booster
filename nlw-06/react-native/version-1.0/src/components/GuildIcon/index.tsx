import React from 'react';
import { Image } from 'react-native';

import uri from '../../assets/discord.png';

import { styles } from './styles';

const GuildIcon: React.FC = () => {
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export { GuildIcon };
