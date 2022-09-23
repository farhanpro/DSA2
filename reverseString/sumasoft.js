let arr1 = [2,3,4,5,6];
let arr2 = [1,2,7,3,4,5,6];
let limit = [arr1 + arr2] ;

function MergeSort (arr1,arr2,limit)
{
    let pos1 = arr1[0];
    let pos2 = arr2[0];
    let Sorted = [];
    let bool = true;
    while(bool)
    {
        if(Sorted.length === (arr1.length + arr2.length))
        {
            bool = false;
            break;
        }
        if(pos1 < pos2)
        {
            Sorted.push(pos1);
            pos1++;
        }
        else
        {
            Sorted.push(pos2);
            pos2++
        }
        
    }
    return (Sorted);
}

console.log(MergeSort(arr1,arr2));