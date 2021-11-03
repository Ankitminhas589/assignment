import {Dimensions, StyleSheet} from 'react-native';
import {FONTS} from '../../common/utills/constants/fonts';
import {AppColors} from '../../common/utills/theme/Colors';
import {_scaleText} from '../../common/utills/utility';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY,
  },
  spendingLimit: {
    fontSize: _scaleText(24).fontSize,
    color: AppColors.WHITE,
    fontFamily: FONTS.AvenirNextLTPro_Bold,
    marginLeft: _scaleText(24).fontSize,
    marginTop: _scaleText(24).fontSize,
  },
  spendingLimitSubTitle: {
    color: AppColors.SECONDARY_TEXT,
    marginTop: _scaleText(15).fontSize,
    fontSize: _scaleText(11).fontSize,
  },
  mainContentContainer: {
    paddingHorizontal: _scaleText(20).fontSize,
    flex: 1,
    backgroundColor: AppColors.WHITE,
    borderTopRightRadius: _scaleText(24).fontSize,
    borderTopLeftRadius: _scaleText(24).fontSize,
    paddingBottom: _scaleText(20).fontSize,
    marginTop: _scaleText(28).fontSize,
    marginBottom: -_scaleText(35).fontSize,
  },
  screenSubtitleContainer: {
    flexDirection: 'row',
    marginTop: _scaleText(20).fontSize,
    alignItems: 'center',
  },
  subtitleLogoStyle: {
    width: _scaleText(16).fontSize,
    height: _scaleText(16).fontSize,
  },
  subtitleText: {
    marginLeft: _scaleText(12).fontSize,
    fontSize: _scaleText(12).fontSize,
  },
  quickfillButtonsMainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginTop: _scaleText(20).fontSize,
  },
  quickfillButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _scaleText(5).fontSize,
    height: _scaleText(40).fontSize,
    backgroundColor: 'rgba(32, 209, 103, 0.1)',
    marginHorizontal: _scaleText(5).fontSize,
  },
  quickillButtonText: {
    color: AppColors.APP_GREEN,
    fontFamily: FONTS.AvenirNextLTPro_Bold,
    fontSize: _scaleText(10).fontSize,
  },
  flex1: {
    flex: 1,
  },
  saveButtonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: _scaleText(50).fontSize,
    width: Dimensions.get('screen').width,
  },
  saveButtonStyle: {
    borderRadius: _scaleText(30).fontSize,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    height: _scaleText(60).fontSize,
  },
  saveButtonText: {
    fontSize: _scaleText(16).fontSize,
    color: AppColors.WHITE,
  },
});
