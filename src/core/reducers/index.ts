import { combineReducers } from 'redux';
import CommonReducer from './commonReducer';


const RootReducer = combineReducers({
    common: CommonReducer
})

export default RootReducer;