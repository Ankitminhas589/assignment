import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, ViewStyle} from 'react-native';
import {AppColors} from '../utills/theme/Colors';

type IProps = {
  contentContainerStyle?: ViewStyle | Array<ViewStyle>;
  safeAreStyle?: ViewStyle | Array<ViewStyle>;
  children: React.ReactNode;
  statusBarColor?: string;
  headerTitle?: string;
};

const ScreenComponent: React.FC<IProps> = ({
  contentContainerStyle = {},
  safeAreStyle,
  children,
  statusBarColor,
}) => {
  return (
    <SafeAreaView style={safeAreStyle || styles.defaultSafeAreaStyle}>
      <View style={contentContainerStyle || styles.defaultContentContainerStyle}>
        <StatusBar
          backgroundColor={statusBarColor || AppColors.PRIMARY}
          animated
          barStyle={'dark-content'}
        />
        {children}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  defaultSafeAreaStyle: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY,
  },
  defaultContentContainerStyle: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});

export default ScreenComponent;
