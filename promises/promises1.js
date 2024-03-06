const promiseOne=new Promise(function(rej,res){
    //Do an asyns task
    //Db call, cryptography,network
    setTimeout(function(){
        console.log('asyn task is complete ');
        res();
    },1000)
});
promiseOne.then(function(){
    console.log("promis consume");
})