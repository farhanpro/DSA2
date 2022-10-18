let names = "farhan";

function Reverser(name)
{
    let backward = [];
for(i=name.length;i>=0;i--)
{
    
    backward.push(name[i]);
    
}
return backward.join("");
}

console.log(Reverser(names));