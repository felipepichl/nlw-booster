import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  title: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ButtonIcon };
