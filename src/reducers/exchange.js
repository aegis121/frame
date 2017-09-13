
import {types as ExchangeTypes} from '../actions/exchange'

let initialState = {}

const reducer = (state=initialState, action) => {
    const {type} = action

    switch(type) {
        case ExchangeTypes.EXCHANGERATES.onRequest: {
            const {currency} = action.data

            return Object.assign({}, state, {
                [currency]: {
                    loading: true
                }
            })
        }
        case ExchangeTypes.EXCHANGERATES.onSuccess: {
            const {currency} = action.data
            const {rates} = action.result.data
            
            return Object.assign({}, state, {
                [currency]: {
                    loading: false,
                    rates,
                }
            })
        }
        case ExchangeTypes.EXCHANGERATES.onFailure:
            return state
    }

    return state
}

export default reducer