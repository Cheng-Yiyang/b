var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));



var client_address="0xd095bcb3e0b89b4e6353e59d526ea88e726ecf50"

var deploy= require('./compoment');


function push_data(){
    deploy.get(client_address);
}

setInterval(push_data,5000);
