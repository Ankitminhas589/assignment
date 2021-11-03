import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const CreditTab = () => {
  const title = 'Sorry';
  const subTitle = 'Screen not configured yet.';
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subTitleStyle}>{subTitle}</Text>
    </View>
  );
};

export default CreditTab;
