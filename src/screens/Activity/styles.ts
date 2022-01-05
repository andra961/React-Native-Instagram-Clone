import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },

  activityText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.WHITE_2,
    padding: 10,
  },

  thisWeekText: {
    fontWeight: 'bold',
  },

  earlierText: {
    fontWeight: 'bold',
  },

  mightKnowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },

  mightKnowTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },

  mightKnowImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },

  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },

  suggestionContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  suggestionTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '64%',
  },

  suggestionImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },

  suggestionName: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  suggestionAccountName: {
    fontSize: 12,
    opacity: 0.5,
  },

  suggestedForYouText: {
    fontSize: 12,
    opacity: 0.5,
  },

  touchableCloseIcon: {
    paddingHorizontal: 10,
  },
  seeAllSuggestionText: {
    color: COLORS.BLUE,
  },
});
export default styles;
