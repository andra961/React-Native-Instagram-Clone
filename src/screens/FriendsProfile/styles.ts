import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },

  headerNameText: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  suggestionText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  friendContainer: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.WHITE_3,
    borderRadius: 2,
    borderWidth: 0.5,
  },

  closeButtonWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  friendImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },

  friendName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  friendAccountName: {
    fontSize: 12,
  },

  followButtonWrapper: {
    width: '80%',
    paddingVertical: 10,
  },

  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    borderColor: COLORS.WHITE_3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
