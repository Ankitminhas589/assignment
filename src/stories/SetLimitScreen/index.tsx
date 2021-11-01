import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, UIManager, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import CurrencyTextInputComponent from '../../common/components/TextInputComponent';
import ScreenComponent from '../../common/hoc/ScreenComponent';
import { CONSTANTS } from '../../common/utills/constants/constants';
import { IMAGE_ASSETS } from '../../common/utills/constants/images';
import { AppColors } from '../../common/utills/theme/Colors';
import { _scaleText } from '../../common/utills/utility';
import { updateUserWeeklyLimit } from '../../core/actions';
import HeaderSetLimitComponent from './components/HeaderSetLimit';

import styles from './styles';

const SetLimitScreen = () => {
    const [value, setValue] = useState('')
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const onSubmit = () => {
        if (value && value != "") {
            let formattedValue: any = `${value}`;
            formattedValue = formattedValue.replaceAll(',', '');
            formattedValue = Number(formattedValue) || 0;
            dispatch(updateUserWeeklyLimit(formattedValue))
            navigation.goBack();
        }
    }
    return (
        <ScreenComponent contentContainerStyle={styles.container}>
            <HeaderSetLimitComponent onBackPress={() => { navigation.goBack() }}></HeaderSetLimitComponent>
            <Text style={styles.spendingLimit}>{CONSTANTS.SET_LIMIT_HEADER_TITLE}</Text>

            <View style={styles.mainContentContainer}>
                <View style={styles.screenSubtitleContainer}>
                    <Image resizeMode="contain" source={IMAGE_ASSETS.ICON_LIMIT_LIGHT} style={styles.subtitleLogoStyle} />
                    <Text style={styles.subtitleText}>{CONSTANTS.SET_LIMIT_MESSAGE}</Text>
                </View>
                <CurrencyTextInputComponent value={value} onValueChange={setValue}></CurrencyTextInputComponent>
                <Text style={styles.spendingLimitSubTitle}>{CONSTANTS.SET_LIMIT_SUBTITLE}</Text>


                <View style={styles.quickfillButtonsMainContainer}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => setValue('5,000')} style={styles.quickfillButtonContainer}>
                            <Text style={styles.quickillButtonText}>{CONSTANTS.QUICK_BUTTON_5}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => setValue('10,000')} style={styles.quickfillButtonContainer}>
                            <Text style={styles.quickillButtonText}>{CONSTANTS.QUICK_BUTTON_10}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => setValue('20,000')} style={styles.quickfillButtonContainer}>
                            <Text style={styles.quickillButtonText}>{CONSTANTS.QUICK_BUTTON_20}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.saveButtonContainer}>
                    <TouchableOpacity onPress={onSubmit} style={[styles.saveButtonStyle, { backgroundColor: value && value != "" ? AppColors.APP_GREEN : AppColors.BUTTON_DISABLED }]}>
                        <Text style={styles.saveButtonText}>{CONSTANTS.SAVE}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenComponent>
    );
}

export default SetLimitScreen;