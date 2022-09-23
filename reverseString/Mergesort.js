let arr1=[21,31,41,51];
let arr2=[20,22,24,31,51];
let i =1;
let j =1;
let arrItem1 = arr1[0];
let arrItem2 = arr2[0];
let MergedArr =[];
while(arrItem2 !== undefined)
{
    if(arrItem1 < arrItem2)
    {
        MergedArr.push(arrItem1);
        arrItem1 = arr1[i];
        i++;
    }
    else 
    {
        MergedArr.push(arrItem2);
        arrItem2 = arr2[j];
        j++;    
    }

}
console.log(MergedArr);

