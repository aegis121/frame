
import {take, put, call} from 'redux-saga/effects'

import {Api} from '../api'

export function* apiCall(action) {
    let {method, onRequest, onSuccess, onFailure, endpoint, auth, data} = action
    
    try {
        yield put({type: onRequest, data})
        
        const {result} = yield call(Api, endpoint, method, data, auth)
        yield put({type: onSuccess, result, data})

    } catch(error) {
        yield put({type: onFailure, error})
    }
}
