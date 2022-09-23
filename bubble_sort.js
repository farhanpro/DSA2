
let arr = [12,1,43,13,33,02,92,91];
let arr2 = [1,32,14,54,24,11];
let i=0;
let j=0;
let arrItem = arr[i];
let arrItem2 = arr2[j];






for(let i=0;i<arr2.length;i++)
{
    for(let j =0;j<arr2.length;j++)
    {
        if(arr2[i] > arr2[i+j])
        {
            let temp = 0;
            temp = arr2[i];
            arr2[i] = arr2[i+j];
            arr2[i+j] = temp;
        }
    }
}

for(let i=0;i<arr.length;i++)
{
    for(let j =0;j<arr.length;j++)
    {
        if(arr[i] > arr[i+j])
        {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[i+j];
            arr[i+j] = temp;
        }
    }
}


console.log(arr);
console.log(arr2);
