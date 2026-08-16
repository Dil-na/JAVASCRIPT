function greet(name){
    console.log(name);

}
//greet("anu")

function User(callback){
callback("Anu")
}
User(greet)


function applyOperation(x, operation){
    return operation(x)
}

function double(x){
    return x *2;
}

console.log(applyOperation(2,double));


