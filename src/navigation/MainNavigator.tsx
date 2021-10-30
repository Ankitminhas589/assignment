import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATOR_ROUTES } from '../common/utills/constants/navigator';
import BottomTab from '../stories/BottomTabs';
import SetLimitScreen from '../stories/SetLimitScreen';
const Stack = createNativeStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName={NAVIGATOR_ROUTES.BOTTOM_TAB_NAVIGATOR}>
            <Stack.Screen component={BottomTab} name={NAVIGATOR_ROUTES.BOTTOM_TAB_NAVIGATOR} options={{ headerShown: false }} />
            <Stack.Screen component={SetLimitScreen} name={NAVIGATOR_ROUTES.SET_LIMIT_SCREEN} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
