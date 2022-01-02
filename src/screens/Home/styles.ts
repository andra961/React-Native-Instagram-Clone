import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
  },

  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  instagramText: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    fontWeight: '500',
  },

  refreshButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default styles;
