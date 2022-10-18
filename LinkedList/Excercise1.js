const obj1= {a:true};
const obj2= obj1;
const obj3= obj2;
obj1.a = "hello";
console.log('1',obj1)
console.log('2',obj2)
console.log('3',obj3)
