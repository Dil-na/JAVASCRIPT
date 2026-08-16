// //object literals
// let user = {
//     name: "Anu",
//     age:20,
//     city:"kochi"
// }
// console.log(user);

// //object constructor
// let userdata = new Object()
// userdata.name = "anu"
// userdata.email = "anu@gmail.com"
// console.log(userdata);

// //accessing object properties
// let user = {
//     name:"Anu",
//     age:"20",
//     city:"kochi"
// }
// console.log(user);

// //1. dot notation
// console.log(user.name);
// //2. bracket notation
// console.log(user["city"]);

// //add and update
// user.email = "anu@gmail.com"
// user.age = 21
// console.log(user);

// //delete
// delete user.age
// console.log(user);


//object methods

// objects
let student = {
    name: "Anu",
    age: 21,
    course: "CSE"
};

//keys
console.log(Object.keys(student));

//values
console.log(Object.values(student));

//entries
console.log(Object.entries(student));

// let user = {
//     name: "Abi",

//     greet: function(){
//         console.log(this.name);
//     }
// };
// console.log(user.name);

// user.greet();

"use strict"
function greet(){
    console.log(this)
}
greet()