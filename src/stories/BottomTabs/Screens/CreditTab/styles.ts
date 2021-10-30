import { StyleSheet } from 'react-native';
import { _scaleText } from '../../../../common/utills/utility';
export default StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    titleStyle: {
        fontSize:_scaleText(15).fontSize
    },
    subTitleStyle: {
        fontSize:_scaleText(12).fontSize
    },
});