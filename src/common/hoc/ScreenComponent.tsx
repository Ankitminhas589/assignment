import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { AppColors } from '../utills/theme/Colors';

type IProps = {
    contentContainerStyle?: ViewStyle | Array<ViewStyle>;
    childContainerStyle?: ViewStyle | Array<ViewStyle>;
    safeAreStyle?: ViewStyle | Array<ViewStyle>;
    children: React.ReactNode;
    statusBarColor?: string;
    headerTitle?: string;
    onBackPress?: () => void
};

const ScreenComponent: React.FC<IProps> = ({
    contentContainerStyle = {},
    childContainerStyle = {},
    safeAreStyle,
    children,
    statusBarColor,
    onBackPress = () => { }
}) => {
    return (
        <SafeAreaView style={safeAreStyle || styles.defaultSafeAreaStyle}>
            <View style={contentContainerStyle || styles.defaultContentContainerStyle}>
                <StatusBar backgroundColor={statusBarColor || AppColors.PRIMARY} animated barStyle={'dark-content'} />
                {children}
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    defaultSafeAreaStyle: {
        flex: 1, backgroundColor: AppColors.PRIMARY
    },
    defaultContentContainerStyle: {
        flex: 1, backgroundColor: AppColors.WHITE
    },

});

export default ScreenComponent;
