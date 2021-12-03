import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  icon: {
    marginRight: 12,
  },
});

export { styles };
