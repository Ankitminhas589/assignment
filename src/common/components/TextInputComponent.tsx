import React from 'react';
import {Text, StyleSheet, View, TextInput, Alert} from 'react-native';
import {CONSTANTS} from '../utills/constants/constants';
import {AppColors} from '../utills/theme/Colors';
import {_scaleText} from '../utills/utility';
import 'intl';
import 'intl/locale-data/jsonp/en';
const maxLimitValue = 50000;
type IProps = {
  onValueChange: (val: string) => void;
  value: string;
};
const CurrencyTextInputComponent: React.FC<IProps> = ({onValueChange, value}) => {
  /**
   * @param val text input value
   * set formatted value after checking validations
   */
  const validateEnteredValue = (val: string) => {
    if (val && val != '') {
      val = val.replace(/,/g, '');
    }
    const parsedValue = Number.parseInt(val);
    if (Number.isNaN(parsedValue) || parsedValue == 0) {
      onValueChange('');
    } else if (parsedValue > maxLimitValue) {
      Alert.alert('Alert', `${CONSTANTS.WEEKLY_SPENDING_MAXIMUM_ERROR_MESSAGE}${maxLimitValue}`);
    } else if (parsedValue.toString().match(/^[0-9]+$/) != null) {
      let parsedString: string = parsedValue.toString().replace(/^0+/, '');
      parsedString = new Intl.NumberFormat().format(parseInt(val));
      onValueChange(parsedString);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.currencyPrefixContainer}>
        <Text style={styles.currencyText}>{CONSTANTS.CURRENCY_SYMBOL}</Text>
      </View>
      <TextInput
        value={value}
        keyboardType="numeric"
        onChangeText={validateEnteredValue}
        style={{flex: 1, marginLeft: _scaleText(15).fontSize}}></TextInput>
    </View>
  );
};

export default CurrencyTextInputComponent;

const styles = StyleSheet.create({
  currencyPrefixContainer: {
    width: _scaleText(35).fontSize,
    height: _scaleText(20).fontSize,
    backgroundColor: AppColors.APP_GREEN,
    borderRadius: _scaleText(4).fontSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: _scaleText(12).fontSize,
    fontWeight: 'bold',
    color: AppColors.WHITE,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: _scaleText(10).fontSize,
    borderBottomWidth: 0.5,
    borderColor: AppColors.SECONDARY_TEXT,
    alignItems: 'center',
  },
});
