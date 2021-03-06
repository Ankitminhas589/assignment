/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Dimensions, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ScreenComponent from '../../../../common/hoc/ScreenComponent';
import {CONSTANTS} from '../../../../common/utills/constants/constants';
import {IMAGE_ASSETS} from '../../../../common/utills/constants/images';
import {UserData} from '../../../../common/utills/constants/types';
import {AppColors} from '../../../../common/utills/theme/Colors';
import {_scaleText} from '../../../../common/utills/utility';
import {getAppUserData, updateUserWeeklyLimit} from '../../../../core/actions';
import {IRootState} from '../../../../core/reducers';
import {RootStackParamList} from '../../../../navigation/MainNavigator';
import DebitCardView from './components/DebitCardView';
import HeaderContentComponent from './components/HeaderContent';
import OptionsRow from './components/OptionsRow';
import styles from './styles';

const W = Dimensions.get('window').width;

const LoadingView = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{CONSTANTS.LOADING}</Text>
      <ActivityIndicator size="large" color={AppColors.WHITE}></ActivityIndicator>
    </View>
  );
};
const ErrorView = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{CONSTANTS.SORRY_ERROR}</Text>
    </View>
  );
};
const DebitCardTab = () => {
  const dispatch = useDispatch();
  type tabScreenProps = StackNavigationProp<RootStackParamList, 'BOTTOM_TAB_NAVIGATOR'>;
  const navigation = useNavigation<tabScreenProps>();
  const [isAccountDetailsVisible, setIsAccountDetailsVisible] = useState(false);
  const [screenIsLoading, setScreenIsLoading] = useState<boolean>(false);
  const [apiError, serAPIError] = useState<boolean>(false);
  const isNetConnected = useSelector<IRootState, boolean>(state => state.common.isNetConnected);
  const userWeeklyLimit = useSelector<IRootState, number>(state => state.common.userWeeklyLimit);
  const userData = useSelector<IRootState, UserData>(state => state.common.userData);
  const [isWeeklyButtonEnabled, setIsWeeklyButtonEnabled] = useState(
    userWeeklyLimit ? true : false,
  );
  /**
   * call the api to get user data and start loading
   */
  useEffect(() => {
    setScreenIsLoading(true);
    dispatch(getAppUserData(isNetConnected, handleAPIError));
  }, []);
  /**
   * stop loading when we get user data
   */
  useEffect(() => {
    if (userData && userData.user_id) {
      setScreenIsLoading(false);
    }
  }, [userData]);
  /**
   * if user has set weekly limit enable the button from the options
   */
  useEffect(() => {
    if (userWeeklyLimit && userWeeklyLimit > 0) {
      setIsWeeklyButtonEnabled(true);
    }
  }, [userWeeklyLimit]);
  /**
   *
   * @param status error message alert
   */
  const handleAPIError = (status: string) => {
    setScreenIsLoading(false);
    serAPIError(true);
    Alert.alert('Error: ' + status);
  };
  /**
   * when user press set weekly limit toggle button
   */
  const handleWeeklyButtonClick = () => {
    if (!isWeeklyButtonEnabled) {
      navigation.navigate('SET_LIMIT_SCREEN');
    } else {
      dispatch(updateUserWeeklyLimit(0));
      setIsWeeklyButtonEnabled(false);
    }
  };
  /**
   * toggle card visibility view
   */
  const toggleCardVisibility = () => {
    setIsAccountDetailsVisible(!isAccountDetailsVisible);
  };
  /**
   *
   * @returns ratio of width
   */
  const getSpendPercentage = () => {
    let value: any = 0;
    if (userData.account_details.weekly_spent && userWeeklyLimit) {
      value = userData.account_details.weekly_spent / userWeeklyLimit;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  };
  /**
   * TODO: Should move LoadingView and ErrorView in High order components
   */
  return (
    <ScreenComponent contentContainerStyle={styles.container}>
      {screenIsLoading ? (
        <LoadingView></LoadingView>
      ) : apiError ? (
        <ErrorView></ErrorView>
      ) : (
        <>
          <HeaderContentComponent
            headerTitle={CONSTANTS.DEBIT_CARD_HEADER_TITLE}
            availableBalance={
              userData?.account_details?.available_balance
            }></HeaderContentComponent>
          <ScrollView
            testID="debit-card-tab-main-scroll-view"
            contentContainerStyle={styles.compensateBottomBar}
            showsVerticalScrollIndicator={false}
            style={styles.scrollViewMainContainer}>
            <View style={styles.compensateView}></View>
            <View style={styles.scrollViewInnerContainer}>
              <DebitCardView
                accountDetails={userData?.account_details}
                cardHolderName={userData?.user_name}
                isVisible={isAccountDetailsVisible}
                onEyePress={toggleCardVisibility}></DebitCardView>

              {userWeeklyLimit ? (
                <>
                  <View style={styles.userLimitProgressBarMain}>
                    <Text style={styles.flex1}>{CONSTANTS.DEBIT_CARD_SPENDING_LIMIT}</Text>
                    <Text>
                      <Text style={{color: AppColors.APP_GREEN}}>
                        {'$' + userData?.account_details.weekly_spent}
                      </Text>
                      <Text style={{color: AppColors.SECONDARY_TEXT}}>
                        {'  |  $' + userWeeklyLimit}
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.progressBarBaseContainer}>
                    <View
                      style={[
                        styles.progressBarSolid,
                        {
                          width: W * getSpendPercentage(),
                          borderTopColor: getSpendPercentage() >= 1 ? 'red' : AppColors.APP_GREEN,
                        },
                      ]}></View>
                  </View>
                </>
              ) : null}
              <OptionsRow
                onPress={() => {}}
                optionIcon={IMAGE_ASSETS.ICON_TOP_UP}
                optionTitle={CONSTANTS.OPTION_TITLE_DEBIT_TOP_UP}
                optionSubTitle={CONSTANTS.OPTION_SUBTITLE_TOP_UP}></OptionsRow>
              <OptionsRow
                onPress={handleWeeklyButtonClick}
                optionIcon={IMAGE_ASSETS.ICON_LIMIT_DARK}
                optionTitle={CONSTANTS.OPTION_TITLE_WEEKLY_SPENDING}
                optionSubTitle={
                  userWeeklyLimit
                    ? `${CONSTANTS.OPTION_SUBTITLE_WEEKLY_SPENDING_ENABLE}${userWeeklyLimit}`
                    : CONSTANTS.OPTION_SUBTITLE_WEEKLY_SPENDING
                }
                showToggle={true}
                isButtonActive={isWeeklyButtonEnabled}></OptionsRow>
              <OptionsRow
                onPress={() => {}}
                optionIcon={IMAGE_ASSETS.ICON_FREEZE}
                optionTitle={CONSTANTS.OPTION_TITLE_FREEZE_CARD}
                optionSubTitle={CONSTANTS.OPTION_SUBTITLE_FREEZE_CARD}
                showToggle={true}></OptionsRow>
              <OptionsRow
                onPress={() => {}}
                optionIcon={IMAGE_ASSETS.ICON_ADD_CARD}
                optionTitle={CONSTANTS.OPTION_TITLE_GET_NEW_CARD}
                optionSubTitle={CONSTANTS.OPTION_SUBTITLE_GET_NEW_CARD}></OptionsRow>
              <OptionsRow
                onPress={() => {}}
                optionIcon={IMAGE_ASSETS.ICON_DEACTIVATED_CARDS}
                optionTitle={CONSTANTS.OPTION_TITLE_DEACTIVATED_CARD}
                optionSubTitle={CONSTANTS.OPTION_SUBTITLE_DEACTIVATED_CARDS}></OptionsRow>
            </View>
          </ScrollView>
        </>
      )}
    </ScreenComponent>
  );
};

export default DebitCardTab;
