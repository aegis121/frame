
import { combineReducers } from 'redux'

import modal from './modal'
import exchange from './exchange'
import eth from './eth'

import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    routing,
    modal,
    exchange,
    eth
})

export default rootReducer
