

    let arr1 = [0,3,5];
    let arr2 = [1,8]
    let arrpos1 = arr1[0];
    let arrpos2 = arr2[0];
    mergedarr = [];
    let i = 1;
    let j = 1;

    while(arrpos1 !== undefined || arrpos2 !== undefined)
    {
        if(arrpos2 === undefined || arrpos1 < arrpos2)
        {
            mergedarr.push(arrpos1);
            arrpos1 = arr1[i];
            i++;
        }else
        {
            mergedarr.push(arrpos2);
            arrpos2 = arr2[j];
            j++;
        }

    }
    console.log(mergedarr);
    return(mergedarr);

console.log(MergerdArray);