import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, DebitCardTab, PaymentsTab, CreditTab, ProfileTab} from './Screens';
import {NAVIGATOR_ROUTES} from '../../common/utills/constants/navigator';
import BottomTabsComponent from '../../common/components/BottomTabsComponent';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      backBehavior="initialRoute"
      tabBar={props => <BottomTabsComponent {...props} />}>
      <Tab.Screen name={NAVIGATOR_ROUTES.TABS_TITLE.HOME_TAB} component={HomeTab} />
      <Tab.Screen name={NAVIGATOR_ROUTES.TABS_TITLE.DEBIT_CARD_TAB} component={DebitCardTab} />
      <Tab.Screen name={NAVIGATOR_ROUTES.TABS_TITLE.PAYMENTS_TAB} component={PaymentsTab} />
      <Tab.Screen name={NAVIGATOR_ROUTES.TABS_TITLE.CREDIT_TAB} component={CreditTab} />
      <Tab.Screen name={NAVIGATOR_ROUTES.TABS_TITLE.PROFILE_TAB} component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default BottomTab;
