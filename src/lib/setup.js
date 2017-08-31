
var Web3 = require('web3');

var web3 = undefined;

function setup() {
    web3 = new Web3();
    web3.setProvider(window.web3.currentProvider);
}

export {
    web3,
    setup
}
