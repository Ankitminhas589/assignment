import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { CONSTANTS } from '../../../../../common/utills/constants/constants';
import { FONTS } from '../../../../../common/utills/constants/fonts';
import { IMAGE_ASSETS } from '../../../../../common/utills/constants/images';
import { AppColors } from '../../../../../common/utills/theme/Colors';
import { _scaleText } from '../../../../../common/utills/utility';
import { AccountDetailType } from '../types';

type IProps = {
    cardHolderName: String;
    isVisible: Boolean;
    onEyePress: () => void;
    accountDetails: AccountDetailType
};


const DebitCardView: React.FC<IProps> = ({
    cardHolderName = "",
    isVisible = false,
    onEyePress,
    accountDetails
}) => {

    function creditCardNumberWithSpace(input: string) {
        let output: string = "";
        if (input) {
            let regx = input.match(/.{1,4}/g);
            if (regx)
                output = regx.join('  ')
        }
        return output;
    }
    function getLastourDigits(input: string) {
        let output: string = "";
        if (input) {
            output = input.substr(-4);
        }
        return output;
    }

    return (
        <View>
            <View style={styles.cardDetailsVisibilityContainer}>
                <TouchableHighlight underlayColor='transparent' onPress={onEyePress}>
                    <View style={styles.cardDetailsVisibilityContainerInner}>
                        <Image
                            resizeMode={'contain'}
                            source={isVisible ? IMAGE_ASSETS.ICON_RED_EYE_CLOSE : IMAGE_ASSETS.ICON_RED_EYE_OPEN}
                            style={styles.iconStyle}
                        />
                        <Text style={styles.redEyeText}>{isVisible ? CONSTANTS.HIDE_CARD_NUMBER : CONSTANTS.SHOW_CARD_NUMBER}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardBrandLogoContainer}>
                    <Image source={IMAGE_ASSETS.ICON_CARD_BRAND} style={styles.cardBrandLogo} />
                </View>
                <View style={styles.cardNumberDetailsContainer}>
                    <Text style={styles.textCardHolderName}>{cardHolderName}</Text>
                    {
                        isVisible ?
                            <Text style={styles.debitCardNumber}>{accountDetails?.debit_card?.card_number ? creditCardNumberWithSpace(accountDetails.debit_card.card_number) : ""}</Text>
                            :
                            <Text style={styles.debitCardNumber}>{creditCardNumberWithSpace(`${CONSTANTS.HIDDEN_CARD_DOTS}${getLastourDigits(accountDetails.debit_card.card_number)}`)}</Text>
                    }
                    <View style={styles.cvvExpiryContainer}>
                        <Text style={styles.expiry}>{`${CONSTANTS.EXP_DATE_PREFIX}${accountDetails?.debit_card?.card_expiry}`}</Text>
                        <Text style={styles.cvv}>{`${CONSTANTS.CVV_PREFIX}${isVisible ? accountDetails?.debit_card?.card_cvv : "***"}`}</Text>
                    </View>
                </View>
                <View style={styles.cardProviderContainer}>
                    <Image resizeMode='contain' source={IMAGE_ASSETS.ICON_VISA_WHITE} style={styles.cardProviderImage} />
                </View>
            </View>

        </View>
    )
};

export default DebitCardView;

const styles = StyleSheet.create({
    cardDetailsVisibilityContainer: {
        backgroundColor: AppColors.WHITE,
        borderTopLeftRadius: _scaleText(5).fontSize,
        borderTopRightRadius: _scaleText(5).fontSize,
        width: _scaleText(151).fontSize,
        height: _scaleText(44).fontSize,
        position: 'absolute',
        right: _scaleText(0).fontSize,
        top: -_scaleText(85).fontSize
    },
    cardDetailsVisibilityContainerInner: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: _scaleText(30).fontSize
    },
    redEyeText: {
        color: AppColors.APP_GREEN,
        marginLeft: _scaleText(5).fontSize,
        fontSize: _scaleText(12).fontSize,
        fontFamily: FONTS.AvenirNextLTPro_Bold
    },
    iconStyle: {
        width: _scaleText(15).fontSize, height: _scaleText(15).fontSize
    },
    cardContainer: {
        width: "100%",
        height: _scaleText(220).fontSize,
        padding: _scaleText(20).fontSize,
        marginTop: -_scaleText(55).fontSize,
        backgroundColor: AppColors.APP_GREEN,
        borderRadius: _scaleText(10).fontSize,
        flexDirection: 'column'
    },
    cardBrandLogoContainer: {
        alignSelf: 'flex-end'
    },
    cardBrandLogo: {
        height: _scaleText(21).fontSize, width: _scaleText(74).fontSize
    },
    cardNumberDetailsContainer: {
        marginTop: _scaleText(20).fontSize
    },
    textCardHolderName: {
        color: AppColors.WHITE,
        fontSize: _scaleText(20).fontSize,
        fontFamily: FONTS.AvenirNextLTPro_Bold
    },
    debitCardNumber: {
        color: AppColors.WHITE,
        marginTop: _scaleText(30).fontSize,
        fontSize: _scaleText(13).fontSize,
        fontWeight: '600',
        fontFamily: FONTS.AvenirNextLTPro_Bold,
        letterSpacing: 4
    },
    cvvExpiryContainer: {
        flexDirection: 'row'
    },
    cardProviderContainer: {
        position: 'absolute', bottom: _scaleText(24).fontSize, right: _scaleText(22).fontSize
    },
    cardProviderImage: {
        height: _scaleText(20).fontSize, width: _scaleText(60).fontSize
    },
    expiry: {
        color: AppColors.WHITE,
        marginTop: _scaleText(20).fontSize,
        fontFamily: FONTS.AvenirNextLTPro_Bold,
        fontSize: _scaleText(13).fontSize
    },
    cvv: {
        marginLeft: _scaleText(35).fontSize,
        color: AppColors.WHITE,
        marginTop: _scaleText(20).fontSize,
        fontFamily: FONTS.AvenirNextLTPro_Bold,
        fontSize: _scaleText(13).fontSize
    },
});