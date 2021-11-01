import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenComponent from '../../../../common/hoc/ScreenComponent';
import { CONSTANTS } from '../../../../common/utills/constants/constants';
import { IMAGE_ASSETS } from '../../../../common/utills/constants/images';
import { UserData } from '../../../../common/utills/constants/types';
import { AppColors } from '../../../../common/utills/theme/Colors';
import { getAppUserData, updateUserWeeklyLimit } from '../../../../core/actions';
import { IRootState } from '../../../../core/reducers';
import { RootStackParamList } from '../../../../navigation/MainNavigator';
import DebitCardView from './components/DebitCardView';
import HeaderContentComponent from './components/HeaderContent';
import OptionsRow from './components/OptionsRow';
import styles from './styles';

const W = Dimensions.get('window').width

const LoadingView = () => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
                {CONSTANTS.LOADING}
            </Text>
            <ActivityIndicator size="large" color={AppColors.WHITE}></ActivityIndicator>
        </View>
    );
}
const ErrorView = () => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
                {CONSTANTS.SORRY_ERROR}
            </Text>
        </View>
    );
}
const DebitCardTab = () => {
    const dispatch = useDispatch();
    type tabScreenProps = StackNavigationProp<RootStackParamList, "BOTTOM_TAB_NAVIGATOR">;
    const navigation = useNavigation<tabScreenProps>();
    const [isAccountDetailsVisible, setIsAccountDetailsVisible] = useState(false)
    const [screenIsLoading, setScreenIsLoading] = useState<boolean>(false);
    const [apiError, serAPIError] = useState<boolean>(false);
    const isNetConnected = useSelector<IRootState, Boolean>(state => state.common.isNetConnected);
    const userWeeklyLimit = useSelector<IRootState, number>(state => state.common.userWeeklyLimit);
    const userData = useSelector<IRootState, UserData>(state => state.common.userData);
    const [isWeeklyButtonEnabled, setIsWeeklyButtonEnabled] = useState(userWeeklyLimit ? true : false)
    useEffect(() => {
        if (userData && userData.user_id) {
            setScreenIsLoading(false)
        }
    }, [userData]);

    useEffect(() => {
        if (userWeeklyLimit && userWeeklyLimit > 0) {
            setIsWeeklyButtonEnabled(true)
        }
    }, [userWeeklyLimit])

    useEffect(() => {
        setScreenIsLoading(true)
        dispatch(getAppUserData(isNetConnected, handleAPIError));
    }, [])
    const handleAPIError = (status: string) => {
        setScreenIsLoading(false)
        serAPIError(true)
        Alert.alert('Error: ' + status)
    }

    const handleWeeklyButtonClick = () => {
        if (!isWeeklyButtonEnabled) {
            navigation.navigate("SET_LIMIT_SCREEN")
        }
        else {
            dispatch(updateUserWeeklyLimit(0))
            setIsWeeklyButtonEnabled(false)
        }
    }

    const toggleCardVisibility = () => {
        setIsAccountDetailsVisible(!isAccountDetailsVisible)
    }
    /**
     * TODO: Should move LoadingView and ErrorView in High order components
     */
    return (
        <ScreenComponent contentContainerStyle={styles.container}>
            {
                screenIsLoading
                    ?
                    <LoadingView></LoadingView>
                    :
                    apiError ?
                        <ErrorView></ErrorView>
                        :
                        <>
                            <HeaderContentComponent headerTitle={CONSTANTS.DEBIT_CARD_HEADER_TITLE} availableBalance={userData?.account_details?.available_balance}></HeaderContentComponent>
                            <ScrollView
                                contentContainerStyle={styles.compensateBottomBar}
                                showsVerticalScrollIndicator={false}
                                style={styles.scrollViewMainContainer}
                            >
                                <View style={styles.compensateView}>
                                </View>
                                <View style={styles.scrollViewInnerContainer}>
                                    <DebitCardView
                                        accountDetails={userData?.account_details}
                                        cardHolderName={userData?.user_name}
                                        isVisible={isAccountDetailsVisible}
                                        onEyePress={toggleCardVisibility}>
                                    </DebitCardView>

                                    <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_TOP_UP} optionTitle={CONSTANTS.OPTION_TITLE_DEBIT_TOP_UP} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_TOP_UP} ></OptionsRow>
                                    <OptionsRow onPress={handleWeeklyButtonClick} optionIcon={IMAGE_ASSETS.ICON_LIMIT_DARK} optionTitle={CONSTANTS.OPTION_TITLE_WEEKLY_SPENDING} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_WEEKLY_SPENDING} showToggle={true} isButtonActive={isWeeklyButtonEnabled}></OptionsRow>
                                    <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_FREEZE} optionTitle={CONSTANTS.OPTION_TITLE_FREEZE_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_FREEZE_CARD} showToggle={true}></OptionsRow>
                                    <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_ADD_CARD} optionTitle={CONSTANTS.OPTION_TITLE_GET_NEW_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_GET_NEW_CARD}></OptionsRow>
                                    <OptionsRow onPress={() => { }} optionIcon={IMAGE_ASSETS.ICON_DEACTIVATED_CARDS} optionTitle={CONSTANTS.OPTION_TITLE_DEACTIVATED_CARD} optionSubTitle={CONSTANTS.OPTION_SUBTITLE_DEACTIVATED_CARDS}></OptionsRow>
                                </View>
                            </ScrollView>
                        </>
            }

        </ScreenComponent>
    );
}

export default DebitCardTab;