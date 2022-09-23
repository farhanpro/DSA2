let names = "Farhan";
let names2 = names.length-1;


const Reverser =()=>
{
  Backward = [];
  for(i=names.length;i>=0;i--)
  {
    Backward.push(names[i]);
   
  }
  return Backward.join('');
}
console.log(Reverser());