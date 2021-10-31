import { UserData } from "../../common/utills/constants/types";
import * as actionsTypes from "../actionTypes/commonActionTypes";


export function updateNetStatus(
    isConnected: Boolean
): actionsTypes.UpdateNetStatusActionType {
    return {
        type: actionsTypes.UPDATE_NET_STATUS,
        isConnected
    };
}
export function updateAppUser(
    userData: UserData
): actionsTypes.UpdateAppUserActionType {
    return {
        type: actionsTypes.UPDATE_APP_USER,
        userData
    };
}
export function updateUserWeeklyLimit(
    userWeeklyLimit: number
): actionsTypes.UpdateWeeklyLimitActionType {
    return {
        type: actionsTypes.UPDATE_WEEKLY_LIMIT,
        userWeeklyLimit
    };
}

export function getAppUserData(
    isConnected: Boolean,
    fail: (status: string) => void
): actionsTypes.GetAppUserActionType {
    return {
        type: actionsTypes.GET_APP_USER,
        isConnected,
        fail
    };
}
