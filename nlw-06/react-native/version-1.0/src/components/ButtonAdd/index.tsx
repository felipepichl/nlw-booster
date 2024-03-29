import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const ButtonAdd: React.FC<RectButtonProperties> = ({ ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.highlight}
        size={24}
      />
    </RectButton>
  );
};

export { ButtonAdd };
