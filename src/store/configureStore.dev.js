import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/root/DevTools'

import 'babel-polyfill'

import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'

const configureStore = (preloadedState) => {

    const sagaMiddleware = createSagaMiddleware()

    const enhancer = compose(
        applyMiddleware(sagaMiddleware),
        DevTools.instrument(),
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        enhancer
    )

    sagaMiddleware.run(mySaga)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore