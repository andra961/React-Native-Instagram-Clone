import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  square: {
    width: 136,
    height: 150,
    marginVertical: 2,
    backgroundColor: 'black',
    opacity: 0.1,
  },

  squaresGrid: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});
export default styles;
