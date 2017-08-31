
import {web3} from './setup'

function getBalance({address}) {
    return new Promise((resolve, reject) => {
        web3.eth.getBalance(address, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

export {
    getBalance
}
