function fabonacci(num)
{   
    let temp1 = 0;
    let temp2 =1;
    let temp3 =0;
    for(let i =0; i<num;i++)
    {
        temp1 = temp2 + temp1;
        temp2 = temp1 + temp2;
        temp3 = temp2;
        console.log(temp1);
        console.log(temp3);
    }
}

//8 == 34
console.log(fabonacci(8));