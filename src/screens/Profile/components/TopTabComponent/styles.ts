import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  square: {
    height: 150,
    marginVertical: 1,
    backgroundColor: COLORS.BLACK,
    opacity: 0.1,
  },

  squaresGrid: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});
export default styles;
