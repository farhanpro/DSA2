let test = [{name: "a", amount:10 },{name: "b", amount:20 },{name: "a", amount:30 },{name: "b", amount:40 }];
// [
// {name: "a", amount:40 },
// {name: "b", amount:60 }
// ]
// console.log(test[0].name);
// let {name,amount} = test[0];
// console.log('====================================');
// console.log(name);
// console.log('====================================');
// console.log('====================================');
// console.log(amount);
// console.log('====================================');

function Adder(test)
{
    let arr = [];
    for(let i =0;i<test.length-1;i++)
    {
       for(let j=0;j<test.length-1;j++)
       {
        if(test[i].name == test[j].name)
        {
            arr.push(test[i].amount += test[i].amount );
        }
       }
    }
   
    console.log(arr[0].name, arr[0].amount)
    
}

Adder(test);