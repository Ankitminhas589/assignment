/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {all, put, takeLatest} from 'redux-saga/effects';
import {API_URLS} from '../../common/utills/constants/api';
import {updateAppUser} from '../actions';
import * as actionsTypes from '../actionTypes/commonActionTypes';
import {getRequest} from '../services';

function* getAppUser({isConnected, fail}: actionsTypes.GetAppUserActionType) {
  try {
    if (isConnected) {
      const {data = {}} = yield getRequest({
        API: API_URLS.USERDATA,
      });
      /**
       * Currently what Mock API provider I am using only returing Data in Array so I did the below code
       */
      if (data && data.length) {
        const data_first_user = data[0];
        if (data_first_user.status == 200) {
          yield put(updateAppUser(data_first_user.success.data));
        }
      } else {
        fail('An error occurred while connecting to server.');
      }
    } else {
      fail('Internet Not Connected');
    }
  } catch (error) {
    fail(JSON.stringify(error));
  }
}

export default function* root() {
  yield all([takeLatest(actionsTypes.GET_APP_USER, getAppUser)]);
}
