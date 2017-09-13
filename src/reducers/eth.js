
import {types as BalanceTypes} from '../actions/eth'

const initialState = {
    balance: 0
}

const reducer = (state=initialState, action) => {
    const {type} = action

    switch(type) {
        case BalanceTypes.BALANCE.onSuccess: {
            return {balance: action.result.c[0]}
        }
        case BalanceTypes.BALANCE.onFailure: {
            // handle error
        }
    }

    return state
}

export default reducer
