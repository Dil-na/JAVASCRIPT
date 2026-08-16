//FOR EACH 
let animal = ["cat","dog","tiger"]

animal.forEach(function(value){
    console.log(value);
})

//MAP

let number = [1,2,3,4,5]
console.log(number);
let doublenum = number.map(num => num*2)
console.log(doublenum);

//FILTER

// let numbers = [1,2,3,4,5]
// let evennum = numbers.filter(num =>num%2===0)
// console.log(evennum);

//Find 
// let numbers = [1,2,3,4,5]
// let firstevennum = numbers.find(num => num%2===0)
// console.log(firstevennum);

//SOME 

// let numbers = [1,3,5]
// let haseven = numbers.some(num => num%2===0)
// console.log(haseven);

//EVERY

// let numbers = [2,4,6,8]
// let alleven = numbers.every(num =>num%2===0)
// console.log(alleven);

//REDUCE

let numbers = [1,2,3,4,5]
const sum = numbers.reduce((a,b)=> a+b)
console.log(sum);