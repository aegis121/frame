
import {newTypes} from './types'

export const ETH_CALL = 'ETH_CALL'

export const call = (actions, endpoint, data={}, field=undefined) => ({
    type: ETH_CALL,
    actions,
    endpoint,
    data,
    field,
})

export const types = {
    BALANCE: newTypes('BALANCE'),
    OTHER: newTypes('OTHER')
}

export const actions = {
    getBalance: (address) => call(types.BALANCE, 'getBalance', {address}),
    other: () => call(types.OTHER, 'other')
}
