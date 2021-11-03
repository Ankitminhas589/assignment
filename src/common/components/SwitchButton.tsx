import React from 'react';
import {StyleSheet, Switch} from 'react-native';
import {AppColors} from '../utills/theme/Colors';
import {_scaleText} from '../utills/utility';

type IProps = {
  onPress: () => void;
  isActive: boolean;
};
const SwitchButton: React.FC<IProps> = ({onPress, isActive}) => {
  return (
    <Switch
      style={styles.buttonStyle}
      trackColor={{false: AppColors.BUTTON_DISABLED, true: AppColors.APP_GREEN}}
      thumbColor={AppColors.WHITE}
      ios_backgroundColor={isActive ? AppColors.APP_GREEN : AppColors.BUTTON_DISABLED}
      onValueChange={onPress}
      value={isActive}
    />
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  buttonStyle: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    marginRight: _scaleText(10).fontSize,
  },
});
