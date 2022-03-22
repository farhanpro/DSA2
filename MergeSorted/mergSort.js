const arr1 = [0, 3,  3, 4,];
const arr2 = [4, 6, 30];
let arrpost1 = arr1[0];
let arrpost2 = arr2[0];
sorted = [];
let i=1;
let j = 1;
let lenof2 = arr1.length + arr2.length;

for (var  k = 1 ;k <lenof2;k++)
{
    if (arrpost1 < arrpost2)
    {
        sorted.push(arrpost1);
        arrpost1 = arr1[i];
        i++;
    }
    else
    {
        sorted.push(arrpost2);
        arrpost2 = arr2[j];
        j++;
    }
}
console.log(sorted);
