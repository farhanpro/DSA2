const Mergedarray = (arr1,arr2) =>
{
   const Mergerdarray3 = [];
   let arr1Item = arr1[0];
   let arr2Item = arr2[0];
   let i = 1;
   let j = 1;

    while (arr1Item !== undefined)
    {
        if(arr2Item === undefined || arr1Item < arr2Item)
        {
            Mergerdarray3.push(arr1Item);
            arr1Item = arr1[i];
            i++
        }
        else 
        {
            Mergerdarray3.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return Mergerdarray3;
}
console.log(Mergedarray([1,32,43,54,65],[4,21,31,53,64]));