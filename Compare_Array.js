array1 =[22,1,34,13,54];
array2 = [22,54,12,13,43,54];

for(i=0;i<array1.length;i++)
{
for(j=0;j<array2.length;j++)
{
    if(array1[i] === array2[j] )
    {
        console.log(array1[i],array2[j],'Both are Similar');
    }
    else
    {
        console.log('Not Similar');
    }
}
}