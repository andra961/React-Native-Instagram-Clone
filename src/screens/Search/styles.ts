import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  rootContanier: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  plusButtonWrapper: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayImageContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_GREY_TRANSPARENT,
  },

  overlayImageCard: {
    backgroundColor: COLORS.WHITE,
    width: 350,
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    elevation: 50,
  },

  overlayImageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  overlayUserProfileImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  overlayUserName: {
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 8,
  },

  overlayImage: {
    width: '100%',
    height: '80%',
  },

  overlayActionContainer: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});

export default styles;
