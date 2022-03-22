let arr = [4,4,2,14,5,6,4,2];
let count = arr.length;
let loader =0;
console.log(count);
console.log("----------");
for(let i = 0;i<count;i++)
{
    loader += arr[i];
    //loader = count/loader;
}
console.log(loader/count);