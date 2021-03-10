import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        const currentView = store.getState().viewChangeCounter;
        const skipTracking = action.skipTracking;

        action.payload.then(
            res => {
                const currentState = store.getState()
                if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                    return
                }
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                const currentState = store.getState()
                if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                    return
                }
                action.error = true;
                action.payload = error;
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};
const middlewares = [thunk, promiseMiddleware, sagaMiddleware];

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}

const store = createStore(rootReducer, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga);
export default store;
