
import {types as LoadingTypes} from '../actions/loading'

/*

const initialState = {
    loaded: false,
    loading: true
}

*/

const initialState = {
    active: true,
    mode: '',
    msg: 'Loading'
}

const reducer = (state=initialState, action) => {
    const {type} = action
    
    switch(type) {
        case LoadingTypes.LOADING_CLIENT.onRequest: {
            return Object.assign({}, state, {active: true, msg: 'Loading client'})
        }
        case LoadingTypes.LOADING_CLIENT.onSuccess: {
            return Object.assign({}, state, {active: true, msg: 'Metamask loaded'})
        }
        case LoadingTypes.LOADING_CLIENT.onFailure: {
            return Object.assign({}, state, {active: true, msg: 'Failed to load metamask'})
        }
    
        case LoadingTypes.LOADING_FUND.onRequest: {
            return Object.assign({}, state, {active: true, mode: 'fund'})
        }
            
        case LoadingTypes.LOADING_FAILURE: {
            return Object.assign({}, state, {active: false})
        }
        case LoadingTypes.LOADING_SUCCESS: {
            return Object.assign({}, state, {active: false})
        }
    }
    
    return state
}

export default reducer
