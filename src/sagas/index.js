
import {fork, takeEvery} from 'redux-saga/effects'

import {apiCall} from './utils'
import {types as ApiTypes} from '../actions/api'

function* mySaga() {
    yield takeEvery(ApiTypes.API_CALL, apiCall)
}

export default mySaga
