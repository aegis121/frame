
import {types as ModalTypes} from '../actions/modal'

let initialState = {
    isOpen: false,
    name: undefined,
    data: undefined,
}

const reducer = (state=initialState, action) => {
    const {type} = action

    switch(type) {
        case ModalTypes.MODAL_SHOW:
            const {name, data} = action
            return {isOpen: true, name, data}
        case ModalTypes.MODAL_HIDE:
            return {isOpen: false}
    }

    return state
}

export default reducer