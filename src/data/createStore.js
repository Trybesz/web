import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './createReducer';
import rootSaga from './rootSaga';

const initStore = (initialState = {}) => {
    const reducer = createReducer();
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = compose;

    const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga)

    return store;
};

export const store = initStore();
