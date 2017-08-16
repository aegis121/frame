
const API_ROOT = "http://localhost:8000"

const GET       = "GET"
const POST      = "POST"
const PUT       = "PUT"
const DELETE    = "DELETE"

export const methods = {
    GET,
    POST,
    PUT,
    DELETE
}

/*
const OK    = "OK"
const BAD   = "BAD"
*/

import {setItem, clearItem, getItem} from './storage'

export const storage = {
    setItem,
    clearItem,
    getItem,
}

const noAuth = () => ({config: {}})

const authWithToken = (tokenname) => {
    let jwt = getItem(tokenname)
    if (jwt == undefined) {
        return ({
            error: `JWT Token ${tokenname} does not exists`
        })
    }

    return ({
        config: {
            'headers': {
                'Authorization': 'Bearer ' + jwt
            },
        }
    })
}

const userAuth = () => authWithToken('user')

export const auth = {
    noAuth,
    userAuth
}

export const Api = (endpoint, method, data={}, auth=noAuth()) => {
    
    let {config, error} = auth
    if (!config) {
        return (error)
    }
    
    config = Object.assign({}, config, {method: method})

    if (data != undefined && method != GET) {
        let body = new FormData()
        for (var i in data) {
            body.append(i, data[i])
        }
        
        config = Object.assign({}, config, {body: body})
    }
    
    const fullUrl = endpoint.startsWith('http') ? endpoint : (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    
    return fetch(fullUrl, config)
        .then(resp => resp.json().then(json => {

            if (!resp.ok) {
                return (`Response not ok. Found ${resp.ok}`)
            }

            return ({result: json})

            /*
            let {status, result} = json
            switch(status) {
                case OK:
                    return ({result})
                case BAD:
                    return Promise.reject(result)
                default:
                    return Promise.reject(`Status is neither OK not BAD. Found ${status}`)
            }
            */

        }
    ))
}
