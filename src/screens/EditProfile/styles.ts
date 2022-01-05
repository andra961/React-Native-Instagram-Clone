import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  editProfileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  changePhotoText: {
    color: COLORS.BLUE_FOLLOW,
  },

  imgContainer: {
    padding: 20,
    alignItems: 'center',
  },

  formContainer: {
    padding: 10,
  },

  formTextInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.WHITE_4,
  },

  switchTo: {
    marginVertical: 10,
    padding: 10,
    color: COLORS.BLUE_FOLLOW,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.WHITE_5,
  },
});
export default styles;
