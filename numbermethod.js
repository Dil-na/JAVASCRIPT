//1.tostring

let num=123;
console.log(typeof num);
let str=num.toString();
console.log(typeof str);

// 2. tofixed

let pi=3.14159;
let newPi=pi.toFixed(2);
console.log(newPi);

let num1=5.6584;
let newNum1=num1.toFixed(2);
console.log(newNum1);

//toprecision()
console.log(pi.toPrecision(2));
console.log(num1.toPrecision(2));

//toExponential()
console.log(123.456.toExponential(2));

//valueof()
let num2=new Number(123);
console.log(typeof num2);
let num3=num2.valueOf()
console.log(typeof num3);

//inFinite()
console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));

//isInteger()
console.log(Number.isInteger(123.456));
console.log(Number.isInteger(48));

//isNaN()
console.log(Number.isNaN(123));
console.log(Number.isNaN(NaN));

console.log("Hello"/2);
console.log(0/0);

//parseInt()
let num4=Number.parseInt("123");
console.log(typeof num4);

//parseFloat()
let num5=Number.parseFloat("123.456");
console.log(num5);
console.log(Number.parseInt("123.456"));
console.log(typeof num5);