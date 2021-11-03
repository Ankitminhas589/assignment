import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../stories/BottomTabs';
import SetLimitScreen from '../stories/SetLimitScreen';
export type RootStackParamList = {
  BOTTOM_TAB_NAVIGATOR: undefined;
  SET_LIMIT_SCREEN: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName={'BOTTOM_TAB_NAVIGATOR'}>
      <Stack.Screen
        component={BottomTab}
        name={'BOTTOM_TAB_NAVIGATOR'}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SetLimitScreen}
        name={'SET_LIMIT_SCREEN'}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
