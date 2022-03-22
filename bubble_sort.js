var i , j;
arr=[23,99,87,58,66,32,11];

const BubbleSort = () =>
{
    for (i=0; i <= arr.length;i++){
        for (j=0; j<=arr.length; j++){
            if(arr[i]>arr[i+j]){
                temp = arr[i];
                arr[i] = arr[i+j];
                arr[i+j] = temp
            }            
        }
    }
    return (arr);
}

console.log(BubbleSort(arr));
//bubble sorting,

