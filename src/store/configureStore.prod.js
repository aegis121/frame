import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

import 'babel-polyfill'

import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'

const configureStore = (preloadedState) => {

    const sagaMiddleware = createSagaMiddleware()

    const enhancer = compose(
        applyMiddleware(sagaMiddleware),
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        enhancer
    )

    sagaMiddleware.run(mySaga)
    return store
}

export default configureStore