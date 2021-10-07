import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import PlayerSvg from '../../assets/player.svg';

import { GuildIcon } from '../GuildIcon';

import { categories } from '../../utils/categories';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface GuildProps {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
}

interface AppointmentProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface Props extends RectButton {
  data: AppointmentProps;
}

const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.content}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.categoty}>{category.title}</Text>
          </View>

          <View style={styles.playersInfo}>
            <PlayerSvg fill={owner ? primary : on} />
            <Text style={[styles.player, { color: owner ? primary : on }]}>
              {owner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export { Appointment, GuildProps, AppointmentProps };
