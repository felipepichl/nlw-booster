import React from 'react';
import { View, Image } from 'react-native';

import discord from '../../assets/discord.png';

import { styles } from './styles';

const GuildIcon: React.FC = () => {
  return <Image source={discord} style={styles.image} resizeMode="cover" />;
};

export { GuildIcon };
