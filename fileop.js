var fs =require('fs');
var http = require('http');

fs.appendFile('myFile.txt','Added Second line',function(err){
if(err) throw err;
console.log('Updated!!');
})