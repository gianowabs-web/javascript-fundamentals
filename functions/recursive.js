function logRecursive(number){
    console.log("started function", number)
    if(number >0){
        logRecursive(number - 1);
    }else{
        console.log("done with recursion");
    }
    console.log("Ended function:",number);

}
logRecursive(4);