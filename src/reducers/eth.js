
import {types as BalanceTypes} from '../actions/eth'

const initialState = {
    balance: 0
}

const reducer = (state=initialState, action) => {
    const {type} = action

    switch(type) {
        case BalanceTypes.BALANCE_SUCCESS: {
            return {balance: action.result.c[0]}
        }
        case BalanceTypes.BALANCE_FAILURE: {
            // handle error
        }
    }

    return state
}

export default reducer
