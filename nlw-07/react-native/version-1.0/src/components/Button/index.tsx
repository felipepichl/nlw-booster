import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
};

const Button: React.FC<Props> = ({
  title,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} {...rest}>
      <Text style={[styles.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
