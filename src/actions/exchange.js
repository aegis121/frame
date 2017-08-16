
import {get} from './api'

export const types = {
    EXCHANGERATES_REQUEST: 'EXCHANGERATES_REQUEST',
    EXCHANGERATES_SUCCESS: 'EXCHANGERATES_SUCCESS',
    EXCHANGERATES_FAILURE: 'EXCHANGERATES_FAILURE'
}

export const actions = {
    getExchange: (currency) => get(types.EXCHANGERATES_REQUEST, types.EXCHANGERATES_SUCCESS, types.EXCHANGERATES_FAILURE, `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`, {currency}),
}
