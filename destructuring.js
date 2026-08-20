//array destructuring

const arr = [10,20,30,40]
// console.log(arr);
// console.log(arr[1]);

// let [a,b,c,d] = arr
// console.log(b);

// let [a,b,c,d,x=50]=arr
// console.log(x);

let arr1 = [10,20,30]
let [a,,c] = arr1

//object destructuring

let obj = {name:"abhi",age:20}
console.log(obj.age);

let {name,age,ph=12345678}=obj
console.log(ph);