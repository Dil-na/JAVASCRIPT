//1.method
function x(callback){
    console.log("x called");
    callback()
}
x(function(){
    console.log("y called");
})

//2.method

function mrng(print){
    print()
}

function greet(){
    console.log("good morning");
}
mrng(greet)