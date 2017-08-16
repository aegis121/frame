
import { combineReducers } from 'redux'

import modal from './modal'
import exchange from './exchange'

import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    routing,
    modal,
    exchange,
})

export default rootReducer