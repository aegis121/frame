
import Api, {methods} from '../api'

export const types = {
    API_CALL: 'API_CALL'
}

const api = (method, actions, endpoint, data, auth) => ({
    type: types.API_CALL,
    actions,
    endpoint, 
    method, 
    auth, 
    data
})

export const get = (...args) => {
    return api(methods.GET, ...args)    
}

export const post = (...args) => {
    return api(methods.POST, ...args)    
}
