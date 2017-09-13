
import {get} from './api'
import {newTypes} from './types'

export const types = {
    EXCHANGERATES: newTypes('EXCHANGERATES'),
}

export const actions = {
    getExchange: (currency) => get(types.EXCHANGERATES, `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`, {currency}),
}
