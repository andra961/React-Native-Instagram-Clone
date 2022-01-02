import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  statusContainer: {
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  statusBarContainer: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: COLORS.GREY,
    position: 'absolute',
    top: 18,
  },
  statusBarFilled: {
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },

  statusHeaderContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  userImgContainer: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ORANGE,
  },
  userImage: {
    borderRadius: 100,
    width: '92%',
    height: '92%',
  },
  headerInfoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  userName: {
    color: COLORS.WHITE,
    fontSize: 15,
    paddingLeft: 10,
  },

  backGroundImage: {
    position: 'absolute',
    width: '100%',
    height: '77%',
    zIndex: -1,
  },

  sendMsgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  msgInput: {
    borderColor: COLORS.WHITE,
    borderRadius: 25,
    width: '85%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: COLORS.WHITE,
  },
});

export default styles;
