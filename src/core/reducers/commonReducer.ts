import * as actionsTypes from "../actionTypes/commonActionTypes";
import { AnyAction } from 'redux'
import { UserData } from "../../common/utills/constants/types";

type CommonState = {
  isNetConnected: Boolean;
  userWeeklyLimit: number;
  userData: UserData;
};
const initialState: CommonState = {
  isNetConnected: true,
  userWeeklyLimit: 0,
  userData: {} as UserData
};

const CommonReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case actionsTypes.UPDATE_NET_STATUS:
      return {
        ...state,
        isNetConnected: action.isConnected
      }
    case actionsTypes.UPDATE_WEEKLY_LIMIT:
      return {
        ...state,
        userWeeklyLimit: action.userWeeklyLimit
      }
    case actionsTypes.UPDATE_APP_USER:
      return {
        ...state,
        userData: action.userData
      }
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
