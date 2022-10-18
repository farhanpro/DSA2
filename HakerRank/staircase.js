function Staircase (n)
{
    let output = "";
    for(let i=0;i<n;i++)
    {
        for(let j=n;j>i;j--)
        {
            output += " ";
        }
        for(let s=0;s<=i;s++)
        {   
            // if(i%2==0)
            {output += "*";}
            // else{
            //  output += " ";  
            // }
            
        }   
        output += "\n";
    }
    return output;
    
}

console.log(Staircase(10));