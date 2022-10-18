let arr =[10,9,11,20,32,54,32,11,5,14,22,31,42];
function bubblesort(arr)
{
    let temp = 0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i] > arr[i + j])
            {
                temp = arr[i];
                arr[i] = arr[i+j];
                arr[i+j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubblesort(arr));