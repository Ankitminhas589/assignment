import * as actionsTypes from "../actionTypes/commonActionTypes";
import { AnyAction } from 'redux'

type CommonState = {
  isNetConnected: Boolean;
};
const initialState: CommonState = {
  isNetConnected: true,
};

const CommonReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case actionsTypes.UPDATE_NET_STATUS:
      return {
        ...state,
        isNetConnected: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
