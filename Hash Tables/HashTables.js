let user =
{
    name :'kylie',
    age : 54,
    magic : true,
    screem :  () => {
        return ("Ahhh");
    }
};

user.spell = 'Abra ka dabra';
console.log(user.name); //O(1)
console.log(user.age);         //O(1)
console.log(user.magic);  
//user.screem();  //O(1)
console.log(user.screem());    //O(1)
console.log(user);    //O(1)