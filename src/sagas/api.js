
import {take, put, call} from 'redux-saga/effects'

import {Api} from '../api'

export default function* apiCall(action) {
    let {method, actions, endpoint, auth, data} = action
    let {onRequest, onSuccess, onFailure} = actions;
    
    try {
        yield put({type: onRequest, data})
        
        const {result} = yield call(Api, endpoint, method, data, auth)
        yield put({type: onSuccess, result, data})

    } catch(error) {
        yield put({type: onFailure, error})
    }
}
