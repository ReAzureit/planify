import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.purple,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  innerSquare: {
    width: 10,
    height: 10,
    backgroundColor: colors.purple,
  },
  checkedBox: {borderWidth: 2},
});

export default styles;
