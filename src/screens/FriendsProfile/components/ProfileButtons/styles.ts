import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  followWrapper: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    borderColor: COLORS.WHITE_3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  messageWrapper: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: COLORS.WHITE_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  dropDownWrapper: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: COLORS.WHITE_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
export default styles;
