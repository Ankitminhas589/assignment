import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../../../common/utills/constants/fonts';
import { IMAGE_ASSETS } from '../../../common/utills/constants/images';
import { AppColors } from '../../../common/utills/theme/Colors';
import { _scaleText } from '../../../common/utills/utility';


type IProps = {
    onBackPress: () => void
};


const HeaderSetLimitComponent: React.FC<IProps> = ({
    onBackPress
}) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={onBackPress} style={styles.headerTitleContainer}>
                    <Image source={IMAGE_ASSETS.ICON_BACK} style={styles.backIcon}></Image>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image source={IMAGE_ASSETS.APP_LOGO} style={styles.logoStyle}></Image>
                </View>
            </View>
        </View>

    )
};

export default HeaderSetLimitComponent;

const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get("window").width,
        backgroundColor: AppColors.PRIMARY,
        paddingHorizontal: _scaleText(24).fontSize
    },
    innerContainer: {
        flexDirection: 'row',
    },
    logoStyle: {
        height: _scaleText(30).fontSize,
        width: _scaleText(30).fontSize,
    },
    backIcon: {
        height: _scaleText(18).fontSize,
        width: _scaleText(18).fontSize,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    logoContainer: {
        justifyContent: 'center',
        paddingRight: _scaleText(10).fontSize
    },
});