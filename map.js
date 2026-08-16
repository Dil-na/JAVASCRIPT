let myMap = new Map()
myMap.set("name","Anu")
myMap.set("age",21)
console.log(myMap);
console.log(myMap.get('name'));
console.log(myMap.has('name'));
console.log(myMap.size);
myMap.delete("age")
console.log(myMap);