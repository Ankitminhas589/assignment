import {UserData} from '../../common/utills/constants/types';

export const GET_APP_USER = 'commonActionTypes/GET_APP_USER';
export interface GetAppUserActionType {
  type: typeof GET_APP_USER;
  isConnected: boolean;
  fail: (status: string) => void;
}

export const UPDATE_APP_USER = 'commonActionTypes/UPDATE_APP_USER';
export interface UpdateAppUserActionType {
  type: typeof UPDATE_APP_USER;
  userData: UserData;
}

export const UPDATE_NET_STATUS = 'commonActionTypes/UPDATE_NET_STATUS';
export interface UpdateNetStatusActionType {
  type: typeof UPDATE_NET_STATUS;
  isConnected: boolean;
}

export const UPDATE_WEEKLY_LIMIT = 'commonActionTypes/UPDATE_WEEKLY_LIMIT';
export interface UpdateWeeklyLimitActionType {
  type: typeof UPDATE_WEEKLY_LIMIT;
  userWeeklyLimit: number;
}

export type CommonAction =
  | GetAppUserActionType
  | UpdateNetStatusActionType
  | UpdateWeeklyLimitActionType;
