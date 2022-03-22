const array1 = ['a','b','c','x'];
const array2 = ['z','y','a'];

function containsCommonItems(arr1,arr2)
{
    let map = {};
    for (let i=0; i < arr1.length; i++)
    {
        if (!map[i])
        {
            const item = array1[i];
            map[item] = true;
        }
    }
    console.log(map);
}

containsCommonItems(array1,array2);
