import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  footerText: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 28,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});

export default styles;
