
function sockMerchant(n, ar) {
    for(var i =0;i<=ar.length;i++)
        {
        for(var j = 0;j<=ar.length;j++)
            {
                if(ar[i] === ar[i+j])
                    {
                        count  = count +1;
                    }
            }
        }
    return count ;
}

