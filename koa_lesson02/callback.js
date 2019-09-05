function getData(callback)
{
    setTimeout(function(){
        let name='Kevin';
        callback(name);
    },1000);
}

getData(function(data){
    data.console.log();
});