let name = "Farhan";

function Reverser(name)
{
    backward = [];
    for(i=name.length-1;i>=0;i--)
    {
         backward += name[i];
    }
    console.log(name);
    console.log(backward);
    return backward;
}

Reverser(name);


