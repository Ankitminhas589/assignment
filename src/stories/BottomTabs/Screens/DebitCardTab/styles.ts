import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../common/utills/constants/fonts';
import {AppColors} from '../../../../common/utills/theme/Colors';
import {_scaleText} from '../../../../common/utills/utility';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY,
  },
  titleStyle: {
    fontSize: _scaleText(15).fontSize,
  },
  subTitleStyle: {
    fontSize: _scaleText(12).fontSize,
  },
  compensateBottomBar: {
    paddingBottom: _scaleText(50).fontSize,
  },
  scrollViewMainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
  },
  scrollViewInnerContainer: {
    paddingHorizontal: _scaleText(20).fontSize,
    flex: 1,
    backgroundColor: AppColors.WHITE,
    borderTopRightRadius: _scaleText(24).fontSize,
    borderTopLeftRadius: _scaleText(24).fontSize,
    paddingBottom: _scaleText(20).fontSize,
  },
  compensateView: {
    height: _scaleText(230).fontSize,
  },
  errorText: {
    fontFamily: FONTS.AvenirNextLTPro_Bold,
    fontSize: _scaleText(15).fontSize,
    color: AppColors.WHITE,
    marginBottom: _scaleText(10).fontSize,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userLimitProgressBarMain: {
    marginTop: _scaleText(30).fontSize,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  progressBarBaseContainer: {
    overflow: 'hidden',
    flex: 1,
    height: _scaleText(16).fontSize,
    backgroundColor: 'rgba(32, 209, 103, 0.1)',
    marginTop: _scaleText(10).fontSize,
    borderRadius: _scaleText(20).fontSize,
  },
  progressBarSolid: {
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: _scaleText(100).fontSize,
    borderTopWidth: _scaleText(100).fontSize,
    borderRightColor: 'transparent',
  },
});
