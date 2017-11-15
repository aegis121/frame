
var Web3 = require('web3');

var web3 = undefined;

const error = ({msg, code}) => {msg, code}

function setup() {
    if (typeof window.web3 !== 'undefined') {
        web3 = new Web3(window.web3);
    } else {
        throw 'Error2';
    }

    console.log(web3)
}

export {
    web3,
    setup
}
