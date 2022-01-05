import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  plusCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyCircles: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: COLORS.BLACK,
    opacity: 0.1,
    marginHorizontal: 5,
  },

  rootContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },

  storyHiglightText: {
    padding: 10,
    letterSpacing: 1,
    fontSize: 14,
  },

  circleScroll: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  editButton: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    borderColor: COLORS.WHITE_3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  editButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
});
export default styles;
