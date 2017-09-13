
import {call, put, takeEvery} from 'redux-saga/effects'

import {ETH_CALL} from '../actions/eth'

const modules = require('../lib')

function *ethCall(action) {
    let {actions, endpoint, data} = action
    let {onRequest, onSuccess, onFailure} = actions;
    
    let func = modules[endpoint]
    if (func == undefined) {
        console.error("Endpoint " + endpoint + " does not exists")
    }
    
    try {
        yield put({type: onRequest, data})
        
        const result = yield call(modules[endpoint], data)
        yield put({type: onSuccess, result, data})

    } catch(error) {
        yield put({type: onFailure, error})
    }
}

function *eth() {
    modules['setup']()
    yield takeEvery(ETH_CALL, ethCall)
}

export default eth
