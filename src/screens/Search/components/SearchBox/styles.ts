import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';
import searchData from '../../../../constants/searchData';

const styles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 10,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
  },

  searchInput: {
    width: '94%',
    backgroundColor: COLORS.WHITE_2,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});

export default styles;
