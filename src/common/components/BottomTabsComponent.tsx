import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { IMAGE_ASSETS } from '../utills/constants/images';
import { NAVIGATOR_ROUTES } from '../utills/constants/navigator';
import { AppColors } from '../utills/theme/Colors';
import { _scaleText } from '../utills/utility';

type ITabsProps = {
    key: number;
    title: string;
    inactiveIcon: any;
    activeIcon: any;
};
const TABS_DATA: Array<ITabsProps> = [
    {
        key: 0,
        title: NAVIGATOR_ROUTES.TABS_TITLE.HOME_TAB,
        inactiveIcon: IMAGE_ASSETS.HOME_INACTIVE,
        activeIcon: IMAGE_ASSETS.HOME_ACTIVE,

    },
    {
        key: 1,
        title: NAVIGATOR_ROUTES.TABS_TITLE.DEBIT_CARD_TAB,
        inactiveIcon: IMAGE_ASSETS.DEBIT_INACTIVE,
        activeIcon: IMAGE_ASSETS.DEBIT_ACTIVE,
    },
    {
        key: 2,
        title: NAVIGATOR_ROUTES.TABS_TITLE.PAYMENTS_TAB,
        inactiveIcon: IMAGE_ASSETS.PAYMENTS_INACTIVE,
        activeIcon: IMAGE_ASSETS.PAYMENTS_ACTIVE,
    },
    {
        key: 3,
        title: NAVIGATOR_ROUTES.TABS_TITLE.CREDIT_TAB,
        inactiveIcon: IMAGE_ASSETS.CREDIT_INACTIVE,
        activeIcon: IMAGE_ASSETS.CREDIT_ACTIVE,
    },
    {
        key: 4,
        title: NAVIGATOR_ROUTES.TABS_TITLE.PROFILE_TAB,
        inactiveIcon: IMAGE_ASSETS.PROFILE_INACTIVE,
        activeIcon: IMAGE_ASSETS.PROFILE_ACTIVE,
    }
]
type IProps = {
    navigation: any;
    state: any;
};

const BottomTabsComponent: React.FC<IProps> = ({
    navigation,
    state,
}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                {TABS_DATA.map((item, index) => {
                    let active = state.index == item.key;
                    return <TouchableHighlight
                        underlayColor='transparent'
                        key={index}
                        onPress={() => navigation.navigate(item.title)}
                        style={styles.iconContainer}
                    >
                        <>
                            <Image
                                resizeMode={'contain'}
                                source={active ? item.activeIcon : item.inactiveIcon}
                                style={styles.iconStyle}
                            />
                            <Text style={active ? styles.titleActive : styles.titleInactive}>{item.title}</Text>
                        </>
                    </TouchableHighlight>
                })}
            </View>
            <SafeAreaView style={styles.safeAreaStyle} />
        </View>
    );
}

export default BottomTabsComponent;

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 2,
        backgroundColor: AppColors.WHITE
    },
    safeAreaStyle: {
        backgroundColor: AppColors.WHITE
    },
    innerContainer: {
        flexDirection: 'row'
    },
    iconStyle: {
        width: _scaleText(24).fontSize, height: _scaleText(24).fontSize
    },
    iconContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: _scaleText(8).fontSize,
    },
    titleActive: {
        color: AppColors.APP_GREEN,
        marginTop: _scaleText(1).fontSize,
        fontSize: _scaleText(10).fontSize,
    },
    titleInactive: {
        color: AppColors.ICON_INACTIVE,
        marginTop: _scaleText(1).fontSize,
        fontSize: _scaleText(10).fontSize,
    }
});