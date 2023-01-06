function x(){
    for(let i = 1; i <= 5; i++){
        //function close(z){
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        //}
        //close(i);
    }
}
x();