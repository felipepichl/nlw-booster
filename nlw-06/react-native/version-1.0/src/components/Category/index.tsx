import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface CategoryProps extends RectButtonProperties {
  title: string;
  icon: React.FC<SvgProps>;
  hasChackBox?: boolean;
  checked?: boolean;
}

const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  hasChackBox = false,
  checked = false,
  ...rest
}) => {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasChackBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};

export { Category };
