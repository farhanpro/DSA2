const matcher = (ar) =>
{
    let flag = 0;
    let counter  = 0 ;
     ar.sort();
    for(let i=0;i<=ar.length -1 ;i++)
    {
        if(ar[i] === ar[i+1])
        {
            flag ++;
            if(flag%2==0)
            {
                counter ++;
            }
        }
        
    
    }
    return(counter);
}
console.log(matcher([10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(matcher([1 ,1 ,3 ,1 ,2 ,1 ,3 ,3, 3 ,3]))