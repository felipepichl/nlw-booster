import React from 'react';
import { TouchableOpacity, Text, ColorValue } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
};

const Button: React.FC<Props> = ({ title, color, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
