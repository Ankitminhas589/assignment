/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {CONSTANTS} from '../../../../../common/utills/constants/constants';
import {FONTS} from '../../../../../common/utills/constants/fonts';
import {IMAGE_ASSETS} from '../../../../../common/utills/constants/images';
import {AppColors} from '../../../../../common/utills/theme/Colors';
import {_scaleText} from '../../../../../common/utills/utility';

type IProps = {
  headerTitle: string;
  availableBalance: number;
};

const HeaderContentComponent: React.FC<IProps> = ({headerTitle, availableBalance = 0}) => {
  /**
   *
   * @param input amount
   * @returns show amount with commas
   */
  function numberWithCommas(input: number) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={IMAGE_ASSETS.APP_LOGO} style={styles.logoStyle}></Image>
        </View>
      </View>
      <Text style={styles.availableBalance}>{CONSTANTS.AVAILABLE_BALANCE}</Text>
      <View style={styles.walletContainer}>
        <View style={styles.walletPrefixContainer}>
          <Text style={styles.walletPrefixText}>{CONSTANTS.CURRENCY_SYMBOL}</Text>
        </View>
        <Text style={styles.walletAvailableBalance}>{numberWithCommas(availableBalance)}</Text>
      </View>
    </View>
  );
};

export default HeaderContentComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: AppColors.PRIMARY,
    paddingHorizontal: _scaleText(24).fontSize,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  logoStyle: {
    height: _scaleText(30).fontSize,
    width: _scaleText(30).fontSize,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: _scaleText(22).fontSize,
    color: AppColors.WHITE,
    textAlign: 'center',
    fontFamily: FONTS.AvenirNextLTPro_Bold,
    marginTop: _scaleText(40).fontSize,
  },
  logoContainer: {
    justifyContent: 'center',
    paddingRight: _scaleText(10).fontSize,
  },
  availableBalance: {
    color: AppColors.WHITE,
    marginTop: _scaleText(27).fontSize,
    fontFamily: FONTS.AvenirNextLTPro_Regular,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _scaleText(12).fontSize,
  },
  walletPrefixContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: _scaleText(40).fontSize,
    height: _scaleText(22).fontSize,
    backgroundColor: AppColors.APP_GREEN,
    borderRadius: _scaleText(4).fontSize,
  },
  walletPrefixText: {
    fontSize: _scaleText(12).fontSize,
    color: AppColors.WHITE,
    fontFamily: FONTS.AvenirNextLTPro_Bold,
  },
  walletAvailableBalance: {
    fontFamily: FONTS.AvenirNextLTPro_Bold,
    fontSize: _scaleText(20).fontSize,
    color: AppColors.WHITE,
    marginLeft: _scaleText(10).fontSize,
  },
});
