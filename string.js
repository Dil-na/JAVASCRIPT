let name="ajay pm";
console.log(name.length);

let address="KOCHI";
console.log(name.toUpperCase());
console.log(address.toLowerCase());

// slice(starting and ending index)
let str="Try hard Fail Better";
console.log(str.slice(0,3));
console.log(str.slice(4,8));
console.log(str.slice(9));

// substring(starting and ending index)
let str1="mind, power, soul";
console.log(str1.substring(6,11));

// substr(startind index and character count)
console.log(str1.substr(6,5));

// replace
let newstr1=str1.replace("power","Space");
console.log(newstr1);

// replaceAll()
let part="mind power power power soul";
let newpart=part.replaceAll("power","space");
console.log(newpart);
console.log(part.replace("power","space"));

// indexof()
let message="hello world";
console.log(message.indexOf("e"));

// charAt()
console.log(message.charAt("4"));

// trim(),trimstart(),trimend()
let mes="       hello    ";
console.log(mes.length);

let newmes=mes.trim();
console.log(newmes.length);


let newmes1=mes.trimStart();
console.log(newmes1.length);


let newmes2=mes.trimEnd();
console.log(newmes2.length);

//concat
let string1="hello";
let string2="world";
let newstring=string1.concat(string2);
console.log(newstring);

//split()

console.log(message.split(" "));
console.log(message.split(' '));
console.log(message.split(","));

