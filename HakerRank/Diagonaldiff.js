function diagonalDifference(arr) {
    let added = [];
    let added2 =[];
    for(let i=0;i <arr.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(arr.indexOf(arr[i]) == 0 && arr.indexOf(arr[j]) == 0 ||
               arr.indexOf(arr[i]) == 1 && arr.indexOf(arr[j]) == 4 ||
               arr.indexOf(arr[i]) == 2 && arr.indexOf(arr[j]) == 8 )
               {
                added.push(arr[j]);
               }
               if(arr.indexOf(arr[i]) == 0 && arr.indexOf(arr[j]) == 2 ||
               arr.indexOf(arr[i]) == 1 && arr.indexOf(arr[j]) == 4 ||
               arr.indexOf(arr[i]) == 2 && arr.indexOf(arr[j]) == 6 )
               {
                added2.push(arr[j]);
               }  
        }
    }
    added.pop();
    function add(x)
    {
       let sum = 0;
        for (let i=0;i<x.length;i++)
        {
            sum += x[i];
        }
        return sum;
    }
    const x = add(added);
    added2.shift();
    added2.pop();
   const y = add(added2);
//    console.log(x);
//    console.log(y);

    return y-x;
}



let arr = [11, 2, 4, 
          4, 5, 6, 
          10, 8, -12];
console.log(diagonalDifference(arr));
