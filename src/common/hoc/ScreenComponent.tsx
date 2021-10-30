import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { AppColors } from '../utills/theme/Colors';

type IProps = {
    contentContainerStyle?: ViewStyle | Array<ViewStyle>;
    childContainerStyle?: ViewStyle | Array<ViewStyle>;
    safeAreStyle?: ViewStyle | Array<ViewStyle>;
    children: React.ReactNode;
    showHeader: Boolean;
    statusBarColor: string;
    onBackPress: () => void
};

const ScreenComponent: React.FC<IProps> = ({
    contentContainerStyle = {},
    childContainerStyle = {},
    safeAreStyle,
    children,
    showHeader = false,
    statusBarColor,
    onBackPress = () => { }
}) => {
    return (
        <SafeAreaView style={safeAreStyle || styles.flex1}>
            <View style={contentContainerStyle || styles.defaultContentContainerStyle}>
                <StatusBar backgroundColor={statusBarColor || AppColors.PRIMARY} animated barStyle={'dark-content'} />
                <View style={childContainerStyle || styles.defaultChildContentContainerStyle}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    defaultContentContainerStyle: {
        flex: 1, backgroundColor: AppColors.WHITE
    },
    defaultChildContentContainerStyle: {
        flex: 1, backgroundColor: AppColors.WHITE
    }
});

export default ScreenComponent;
