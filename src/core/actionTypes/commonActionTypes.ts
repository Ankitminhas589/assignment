export const GET_APP_USER = "commonActionTypes/GET_APP_USER";
export interface GetAppUserAction {
    type: typeof GET_APP_USER;
    isConnected: Boolean;
    fail: (status: string) => {};
}

export const UPDATE_NET_STATUS = "commonActionTypes/UPDATE_NET_STATUS";
export interface UpdateNetStatus {
    type: typeof UPDATE_NET_STATUS;
    isConnected: Boolean;

}

export type CommonAction =
    | GetAppUserAction
    | UpdateNetStatus
