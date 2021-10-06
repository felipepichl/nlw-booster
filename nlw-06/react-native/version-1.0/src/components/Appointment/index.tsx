import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { View } from 'react-native';

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';

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
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.content}>
        <GuildIcon />
      </View>
    </RectButton>
  );
};

export { Appointment, GuildProps, AppointmentProps };
