import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },

  userImgContainer: {
    width: 68,
    height: 68,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: COLORS.PROFILE_OUTLINE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: COLORS.ORANGE,
  },

  userName: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default styles;
