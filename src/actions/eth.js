
export const ETH_CALL = 'ETH_CALL'

const call = (onRequest, onSuccess, onFailure, endpoint, data={}) => ({
    type: ETH_CALL,
    onRequest,
    onSuccess,
    onFailure,
    endpoint,
    data
})

export const types = {
    BALANCE_REQUEST: 'BALANCE_REQUEST',
    BALANCE_SUCCESS: 'BALANCE_SUCCESS',
    BALANCE_FAILURE: 'BALANCE_FAILURE'
}

export const actions = {
    getBalance: (address) => call(types.BALANCE_REQUEST, types.BALANCE_SUCCESS, types.BALANCE_FAILURE, 'getBalance', {address})
}
