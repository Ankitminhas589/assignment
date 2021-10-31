import React from 'react';
import { ScrollView, View } from 'react-native';
import ScreenComponent from '../../../../common/hoc/ScreenComponent';
import { CONSTANTS } from '../../../../common/utills/constants/constants';
import { IMAGE_ASSETS } from '../../../../common/utills/constants/images';
import DebitCardView from './components/DebitCardView';
import HeaderContentComponent from './components/HeaderContent';
import OptionsRow from './components/OptionsRow';
import styles from './styles';
import { AccountDetailType } from './types';

const DebitCardTab = () => {

    let dummyAccountDetails: AccountDetailType = {
        "account_number": 12345677,
        "available_balance": 5000,
        "limit_enabled": false,
        "weekly_limit": 7000,
        "weekly_spent": 6000,
        "debit_card": {
            "card_number": "5647341124132020",
            "card_expiry": "05/24",
            "card_cvv": "469"
        }
    }
    return (
        <ScreenComponent contentContainerStyle={styles.container}>
                <HeaderContentComponent headerTitle={CONSTANTS.DEBIT_CARD_HEADER_TITLE} availableBalance={3000}></HeaderContentComponent>
                <ScrollView
                    contentContainerStyle={styles.compensateBottomBar}
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewMainContainer}
                >
                    <View style={styles.compensateView}>
                    </View>
                    <View style={styles.scrollViewInnerContainer}>
                        <DebitCardView accountDetails={dummyAccountDetails} cardHolderName="Ankit Minhas" isVisible={true} onEyePress={() => { }}></DebitCardView>

                        <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_TOP_UP} optionTitle={CONSTANTS.OPTION_TITLE_DEBIT_TOP_UP} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_TOP_UP} ></OptionsRow>
                        <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_LIMIT_DARK} optionTitle={CONSTANTS.OPTION_TITLE_WEEKLY_SPENDING} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_WEEKLY_SPENDING} showToggle={true}></OptionsRow>
                        <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_FREEZE} optionTitle={CONSTANTS.OPTION_TITLE_FREEZE_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_FREEZE_CARD} showToggle={true}></OptionsRow>
                        <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_ADD_CARD} optionTitle={CONSTANTS.OPTION_TITLE_GET_NEW_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_GET_NEW_CARD}></OptionsRow>
                        <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_DEACTIVATED_CARDS} optionTitle={CONSTANTS.OPTION_TITLE_DEACTIVATED_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_DEACTIVATED_CARDS}></OptionsRow>
                    </View>
                </ScrollView>
        </ScreenComponent>
    );
}

export default DebitCardTab;