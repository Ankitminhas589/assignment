import React from 'react';
import { Text, StyleSheet, View, TextInput, } from 'react-native';
import { CONSTANTS } from '../utills/constants/constants';
import { AppColors } from '../utills/theme/Colors';
import { _scaleText } from '../utills/utility';
import "intl";
import "intl/locale-data/jsonp/en";
type IProps = {
    onValueChange: (val: string) => void,
    value: string

};
const CurrencyTextInputComponent: React.FC<IProps> = ({
    onValueChange,
    value,
}) => {
    const validateEnteredValue = (val: any) => {
        if(val&&val!=""){
            val = val.replace(/,/g,"");
        }
        if (val == '') {
            onValueChange("")
        }
        else if (val.match(/^[0-9]+$/) != null) {
            val = val.replace(/^0+/, '');
            val = new Intl.NumberFormat().format(parseInt(val));
            onValueChange(val)
        }
    }
    return (
        <View style={styles.container}>
            <View
                style={styles.currencyPrefixContainer}>
                <Text style={styles.currencyText}>{CONSTANTS.CURRENCY_SYMBOL}</Text>
            </View>
            <TextInput value={value} keyboardType='numeric' onChangeText={validateEnteredValue} style={{ flex: 1, marginLeft: _scaleText(15).fontSize }}></TextInput>
        </View>
    );
}

export default CurrencyTextInputComponent;

const styles = StyleSheet.create({
    currencyPrefixContainer: {
        width: _scaleText(35).fontSize,
        height: _scaleText(20).fontSize,
        backgroundColor: AppColors.APP_GREEN,
        borderRadius: _scaleText(4).fontSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    currencyText: {
        fontSize: _scaleText(12).fontSize,
        fontWeight: 'bold',
        color: AppColors.WHITE
    },
    container: {
        flexDirection: 'row',
        paddingVertical: _scaleText(10).fontSize,
        borderBottomWidth: 0.5,
        borderColor: AppColors.SECONDARY_TEXT,
        alignItems: 'center'
    }
});