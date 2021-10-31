import { combineReducers } from 'redux';
import CommonReducer from './commonReducer';


const RootReducer = combineReducers({
    common: CommonReducer
})
export type IRootState = ReturnType<typeof RootReducer>;
export default RootReducer;