
import {newTypes} from './types'

export const ETH_CALL = 'ETH_CALL'

const call = (actions, endpoint, data={}) => ({
    type: ETH_CALL,
    actions,
    endpoint,
    data
})

export const types = {
    BALANCE: newTypes('BALANCE'),
    OTHER: newTypes('OTHER')
}

export const actions = {
    getBalance: (address) => call(types.BALANCE, 'getBalance', {address}),
    other: () => call(types.OTHER, 'other')
}
