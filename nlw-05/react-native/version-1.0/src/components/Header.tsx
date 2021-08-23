import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../styles/colors';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      {/* <Image /> */}
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '20',
    // marginTop: ,''
    backgroundColor: colors.red,
  },
});
