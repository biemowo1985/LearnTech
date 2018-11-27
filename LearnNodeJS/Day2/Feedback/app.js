var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url==='/')
    {
        fs.readFile('./Views/',function(err,data){
            if(err)
            {
                return res.end('404 not found.');
            }
            else
            {

            }
        });
    }
}).listen(3000,function(){
    console.log('Server is running...');
});