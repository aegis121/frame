
import {fork, takeEvery, call, put, cancel} from 'redux-saga/effects'

import apiCall from './api'
import eth, {ethCall} from './eth'

import {setup} from '../lib'

import {types as ApiTypes} from '../actions/api'

import loading from './loading'

function* thecall(action) {
    let {actions} = action
    let {onRequest, onSuccess, onFailure} = actions;

    yield put({type: onRequest})
}

function* normalCalls() {
    yield takeEvery('NNN', thecall)
}

function* mySaga() {
    let ethCalls = yield fork(eth)
    let norCalls = yield fork(normalCalls)

    let result = yield call(loading)
    if (!result) {
        yield cancel(ethCalls)
        //yield cancel(normalCalls)
    }
}

export default mySaga
