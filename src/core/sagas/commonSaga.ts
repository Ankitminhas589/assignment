import { all, takeLatest } from "redux-saga/effects";
import * as actionsTypes from "../actionTypes/commonActionTypes";

function* getAppUser({ isConnected, fail }: actionsTypes.GetAppUserAction) {

}

export default function* root() {
    yield all([
        takeLatest(actionsTypes.GET_APP_USER, getAppUser),
    ]);
}
