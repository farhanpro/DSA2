const value = (n)=>
{
    Output = '';
    for(i=0;i<=n;i++)
    {
        for(j=n-1;j>=i;j--)
        {
            Output += " ";
        }
        for(k=1;k<=i;k++)
        {
            Output += "#";
        }
       // console.log(Output);
         Output += "\n";
    }
    return Output;
}

console.log(value(6));