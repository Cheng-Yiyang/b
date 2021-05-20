var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

abi=[{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"gettime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storageArr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"v1","type":"uint256[]"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"checker","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"update","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"time_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"internet_check","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

var contract_address="0xe76590b4189d1e0dcd8bc1582dc6daa1da81bac2"
var client_address="0x8ba3cb17cf5bc56e23c50551dccc28a04460011a"

var MyContract =new web3.eth.Contract(abi,contract_address);

fs = require('fs');

function read_input(){
    var array3=fs.readFileSync("data.txt");
    var array4=array3.toString().split(",");
    console.log('readind_accompolished');
    return array4;
    
}
function set(from,buffer) {
    MyContract.methods.set(buffer).send({from:from},function(err,result){
        if (err) {
            console.log(err);
        }
        var index=result;
        b=index.toString()
        input=b+'||'+ Date.now()+'\n';
        
        fs.appendFile('hash_Id_save.txt',input , function (err) {
          if (err) return console.log(err);
          console.log('hash_id > hash_Id_save.txt');
        });

        
    })
}
function get(from){
    MyContract.methods.update().call({from:from},function(err,result){
        if (err) {
            console.log(err)
        }
    
        var output1=result;
        b=output1.toString()
        fs = require('fs');
        fs.writeFile('record_save.txt',b, function (err) {
          if (err) return console.log(err);
          console.log('output > record_save.txt');
        });
        var b_1=b+'\n';
        fs.appendFile('output.txt',b , function (err) {
          if (err) return console.log(err);
          console.log('hash_id > output_save.txt');
        });

        
    })
}



function read_input(){
    var array;
    var array3=fs.readFileSync("data.txt");
    array=array3.toString().split(",");
    return array;
}


module.exports ={
    read_input,
    set,
    get
}






