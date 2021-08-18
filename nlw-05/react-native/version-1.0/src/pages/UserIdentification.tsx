import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const UserIdentification: React.FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <View style={style.form}>
          <Text style={style.emoji}>😄</Text>
          <Text style={style.title}>
            Como podemos
            {'\n'}
            chamar você?
          </Text>
          <TextInput style={style.input} placeholder="Digite um nome" />

          <View style={style.footer}>
            <Button />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { UserIdentification };

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },

  emoji: {
    fontSize: 44,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },

  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
});
