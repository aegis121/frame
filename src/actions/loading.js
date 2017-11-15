
import {newTypes} from './types'

import {call} from './eth'

export const types = {
    LOADING_CLIENT: newTypes('LOADING_CLIENT'),
    LOADING_FUND: newTypes('LOADING_FUND'),
    
    LOADING_SUCCESS: 'LOADING_SUCCESS',
    LOADING_FAILURE: 'LOADING_FAILURE'
}

const normalCall = (actions, endpoint, data={}, field=undefined) => ({
    type: 'NNN',
    actions,
    endpoint,
    data,
    field,
})

export const actions = {
    loadSuccess: () => ({type: types.LOADING_SUCCESS}),
    loadFailure: () => ({type: types.LOADING_FAILURE}),

    checkClient: () => call(types.LOADING_CLIENT, 'setup', {}, 'loading'),
    
    checkFund: () => normalCall(types.LOADING_FUND, 'other', {}, 'loading'),
    checkFundSuccess: () => ({type: types.LOADING_FUND.onSuccess}),
    checkFundFailure: () => ({type: types.LOADING_FUND.onFailure}),
}
