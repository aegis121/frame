
export const types = {
    MODAL_SHOW: 'MODAL_SHOW',
    MODAL_HIDE: 'MODAL_HIDE'
}

export const actions = {
    showModal: (name, data) => ({type: types.MODAL_SHOW, name, data}),
    closeModal: () => ({type: types.MODAL_HIDE})
}
