import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNetStatus } from '../core/actions';
import { MainNavigator } from './MainNavigator';

export function RootNavigator() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleInternetStatusChange);
    return unsubscribe
  }, [])

  const handleInternetStatusChange = ({ isConnected, isInternetReachable }: { isConnected: boolean | null; isInternetReachable: boolean | null; }) => {
    if (isConnected != null)
      dispatch(updateNetStatus(isConnected))
  }
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
