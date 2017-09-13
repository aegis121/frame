
const REQUEST = "_REQUEST"
const SUCCESS = "_SUCCESS"
const FAILURE = "_FAILURE"

export const newTypes = (name) => ({
    onRequest: name + REQUEST,
    onSuccess: name + SUCCESS,
    onFailure: name + FAILURE,
})
