// Object
const user = {
  name: "John Doe",
  age: 30,
  islogin: true,
}
console.log(user);
console.log(typeof user);

// array
const numbers= [1,2,3,4]
console.log(numbers);
console.log(typeof numbers);

// function
function greet(){
    console.log("hello");
}
greet()
console.log(typeof greet);

function greet(name){
    console.log("hello " + name);
    console.log(`hai ${name}`);
}
greet("anu")