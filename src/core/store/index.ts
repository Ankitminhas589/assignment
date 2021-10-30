import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers';
import RootSaga from '../sagas';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);