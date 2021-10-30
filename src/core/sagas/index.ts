import { all, fork } from 'redux-saga/effects';
import CommonSaga from './commonSaga';

function* rootSaga() {
    yield all([
        fork(CommonSaga)
    ]);
}

export default rootSaga;
