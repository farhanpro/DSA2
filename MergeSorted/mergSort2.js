const arr1 = [7,8,9,10];
const arr2 = [0,1,2,3,4];
let mergerdarry = [];
let arrpos1 = arr1[0];
let arrpos2 = arr2[0];
let i = 1 ;
let j = 1;
console.log(arr1.length + arr2.length);
while (arrpos1 || arrpos2)
{
    if(arrpos2 === undefined || arrpos1 < arrpos2)
    {
        mergerdarry.push(arrpos1);
        arrpos1 = arr1[i];
        i++;
    }
    else 
    {
        mergerdarry.push(arrpos2);
        arrpos2 = arr2[j];
        j++;
    }
}
console.log(mergerdarry);