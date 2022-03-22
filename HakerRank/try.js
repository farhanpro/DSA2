function staircase(n) {
    // Write your code here
    let str ='';
    for(let i=0;i<=n;i++)
        {
            for(let j=n-1;j>i;j++)
                {
                    str += " ";
                }
            for(let k=0;k<=i-1;k++)
                {
                    str += "#";
                }
            str += "\n";
        }
    console.log(str);

}
console.log(staircase(7));