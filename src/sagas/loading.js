
import {fork, take, takeEvery, call, put} from 'redux-saga/effects'
import {ETH_CALL} from '../actions/eth'

import {actions as LoadingActions} from '../actions/loading'

const {checkClient, checkFund} = LoadingActions;

const loadActions = [
    checkClient,
    checkFund,
]

function *waitForResponse({onSuccess, onFailure}) {
    let action = yield take([onSuccess, onFailure])

    if (action.type == onSuccess) {
        return true
    }

    if (action.type == onFailure) {
        return false
    }

    throw 'Error'
}

function *loading() {
    for (var i of loadActions) {
        let action = i()

        yield put(action)

        let result = yield call(waitForResponse, action.actions)

        if (!result) {
            yield put(LoadingActions.loadFailure())
            return false
        }
    }

    yield put(LoadingActions.loadSuccess())
    return true
}

export default loading
