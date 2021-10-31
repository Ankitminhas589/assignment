import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../common/utills/theme/Colors';
import { _scaleText } from '../../../../common/utills/utility';
export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: AppColors.PRIMARY
    },
    titleStyle: {
        fontSize: _scaleText(15).fontSize
    },
    subTitleStyle: {
        fontSize: _scaleText(12).fontSize
    },
    compensateBottomBar:{
        paddingBottom: _scaleText(50).fontSize
    },
    scrollViewMainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0, flex: 1
    },
    scrollViewInnerContainer: {
        paddingHorizontal: _scaleText(20).fontSize,
        flex: 1,
        backgroundColor: AppColors.WHITE,
        borderTopRightRadius: _scaleText(24).fontSize,
        borderTopLeftRadius: _scaleText(24).fontSize,
        paddingBottom: _scaleText(20).fontSize
    },
    compensateView: {
        height: _scaleText(230).fontSize
    }
});