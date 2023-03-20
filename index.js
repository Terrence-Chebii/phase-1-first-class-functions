function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("named function");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("this is an anonymus function");
    }
}