
import {fork, takeEvery} from 'redux-saga/effects'

import {apiCall} from './utils'
import eth from './eth'

import {types as ApiTypes} from '../actions/api'

function* mySaga() {
    yield takeEvery(ApiTypes.API_CALL, apiCall)
    yield fork(eth)
}

export default mySaga
