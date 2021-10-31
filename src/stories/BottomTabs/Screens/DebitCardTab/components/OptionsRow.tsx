import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View } from 'react-native';
import SwitchButton from '../../../../../common/components/SwitchButton';
import { AppColors } from '../../../../../common/utills/theme/Colors';
import { _scaleText } from '../../../../../common/utills/utility';

type IProps = {
    optionIcon: ImageRequireSource;
    optionTitle: string;
    optionSubTitle: string;
    isButtonActive?: boolean;
    showToggle?: boolean;
    onPress: () => void,
};


const OptionsRow: React.FC<IProps> = ({
    optionIcon,
    optionTitle = "",
    optionSubTitle = "",
    showToggle = false,
    isButtonActive = false,
    onPress
}) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <Image source={optionIcon} style={styles.iconStyle} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{optionTitle}</Text>
                    <Text numberOfLines={1} style={styles.subtitle}>{optionSubTitle}</Text>
                </View>
            </View>
            {showToggle && <SwitchButton isActive={isButtonActive} onPress={onPress} />}
        </View>
    )
};

export default OptionsRow;

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: _scaleText(16).fontSize,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerContainer: {
        flexDirection: 'row'
    },
    iconStyle: {
        height: _scaleText(30).fontSize,
        width: _scaleText(30).fontSize
    },
    contentContainer: {
        marginLeft: _scaleText(14).fontSize
    },
    title: {
        color: AppColors.PRIMARY_TEXT,
        fontSize: _scaleText(14).fontSize,
    },
    subtitle: {
        color: AppColors.SECONDARY_TEXT,
        fontSize: _scaleText(12).fontSize,
    }
});