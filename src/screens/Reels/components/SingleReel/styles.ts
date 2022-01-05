import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  reelContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  videoWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    bottom: 80,
    left: 0,
  },

  infoContainer: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },

  roundUserImgOutline: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
    margin: 10,
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
  },

  reelDescription: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginHorizontal: 10,
  },

  actionsContainer: {
    position: 'absolute',
    bottom: 100,
    right: 0,
  },

  squareUserImgOutline: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    margin: 10,
  },

  squareUserImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;
