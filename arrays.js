names = ['a','b','c','d','e'];
names.push('f'); //o(1)
console.log(names)
names.pop(); //o(1)
console.log(names)
names.pop(); //o(1)
console.log(names)
names.unshift('Farhan');//o(n) Placing it on the index value 0
console.log(names);
names.splice(1,0,"Shaikh");//o(n) Placing it on the index value of 1
console.log(names);
