import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/rodrigo.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Felipe Pichl</Text>
      </View>

      <Image source={userImg} style={styles.image} />
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
    marginTop: getStatusBarHeight(),
    padding: 20,
  },

  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
