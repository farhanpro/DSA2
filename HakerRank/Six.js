let names = "nitin";
let count  = names.length;

for(let i = 0;i<count;i++)
{
    // console.log(names[0]);
    // console.log(names[-1]);
    // console.log(names[2]);
    // console.log(names[-2]);
    //console.log(names[1]);

    if(names[1] === names.slice(-1))
    {
        if(names[2] === names.slice(-2))
        {
            console.log("palindrome");
        }

    }
    else 
    {
        console.log("Not a Palindrome")
    }
}
