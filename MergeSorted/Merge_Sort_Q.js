const MergedArr = (arr1,arr2)=>
{
    const MergerdArr2 = [];
    let arr1Item =arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;
    
    while(arr1Item !== undefined)
    {
        if(arr2Item === undefined || arr1Item < arr2Item)
        {
            MergerdArr2.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }
        else
        {
            MergerdArr2.push(arr2Item);
            arr2Item = arr2[i];
            j++;
        }
    }
    return MergerdArr2;
}
console.log(MergedArr([12,32,43,54,65],[10,31,42,53,64]));