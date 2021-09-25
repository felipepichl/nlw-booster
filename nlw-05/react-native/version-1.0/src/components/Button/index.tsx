import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
