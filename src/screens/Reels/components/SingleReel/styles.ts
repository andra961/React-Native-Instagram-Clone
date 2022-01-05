import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  reelContainer: {},

  bodyContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },

  muteIconWrapper: {
    backgroundColor: 'rgba(52,52,52,0.9)',
    borderRadius: 100,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  overlayContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    paddingBottom: 10,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  roundUserImgOutline: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundUserImg: {
    width: '92%',
    height: '92%',
    borderRadius: 100,
  },

  reelTitle: {
    color: COLORS.WHITE,
    fontSize: 16,
    marginLeft: 10,
  },

  reelDescription: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginHorizontal: 12,
  },

  actionsContainer: {
    position: 'absolute',
    bottom: 30,
    right: 12,
    alignItems: 'center',
  },

  squareUserImgOutline: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },

  squareUserImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;
