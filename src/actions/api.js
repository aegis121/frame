
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

export const deleted = (...args) => {
    return api(methods.DELETE, ...args)
}

export const put = (...args) => {
    return api(methods.PUT, ...args)
}
