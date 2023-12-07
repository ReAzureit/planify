import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative'},
  content: {
    backgroundColor: colors.white,
    padding: 36,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 'auto',
  },
  image: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    height: 423,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subTitle: {
    color: colors.grey,
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 16,
    width: 284,
    alignSelf: 'center',
  },
});

export default styles;
