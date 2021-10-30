import * as actionsTypes from "../actionTypes/commonActionTypes";


export function updateNetStatus(
    isConnected: Boolean
): actionsTypes.UpdateNetStatus {
    return {
        type: actionsTypes.UPDATE_NET_STATUS,
        isConnected
    };
}

export function getAppUserData(
    isConnected: Boolean,
    fail: (status: string) => {}
): actionsTypes.GetAppUserAction {
    return {
        type: actionsTypes.GET_APP_USER,
        isConnected,
        fail
    };
}
