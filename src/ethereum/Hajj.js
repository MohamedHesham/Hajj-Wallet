import web3 from './Web3';

const address = '0xa2fc6f8a359ea47991615de46f2c225c6ce2e88b';
const abi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "stores", "outputs": [{ "name": "name", "type": "string" }, { "name": "addrss", "type": "string" }, { "name": "phone", "type": "uint256" }, { "name": "key", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_stored", "type": "address" }], "name": "removeStore", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_price", "type": "uint256" }, { "name": "_expireDate", "type": "string" }], "name": "addItem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "items", "outputs": [{ "name": "name", "type": "string" }, { "name": "price", "type": "uint256" }, { "name": "expireDate", "type": "string" }, { "name": "owner", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_addrss", "type": "string" }, { "name": "_phone", "type": "uint256" }, { "name": "_key", "type": "address" }], "name": "addStore", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_itemId", "type": "uint256" }], "name": "buyItem", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "Gov", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

export default new web3.eth.Contract(abi, address);