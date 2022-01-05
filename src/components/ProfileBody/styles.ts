import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerRightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAccountName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  nameText: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  postText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  followersText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  followingText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;
