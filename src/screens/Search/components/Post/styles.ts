import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10,
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },

  imageAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImg: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: COLORS.ORANGE,
    marginRight: 10,
  },

  postImg: {
    width: '100%',
    height: 400,
  },

  postTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
  },

  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },

  infoContainer: {
    paddingHorizontal: 15,
  },

  likes: {},

  description: {
    fontWeight: '700',
    fontSize: 14,
    paddingVertical: 2,
  },

  viewComments: {
    opacity: 0.4,
    paddingVertical: 2,
  },

  addCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  posterImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  addCommentInput: {
    opacity: 0.5,
  },
});

export default styles;
