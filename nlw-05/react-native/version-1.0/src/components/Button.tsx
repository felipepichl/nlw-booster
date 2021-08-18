import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Button: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>Confirmar</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
