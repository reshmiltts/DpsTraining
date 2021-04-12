var fs =require('fs');

fs.rename('myFile.txt','myNewFile.txt',function(err){
    if(err) throw err;
    console.log('Renamed!!');
})