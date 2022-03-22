function App(scores)
{
    let High = 0;
    let Low = 0;
    let bestScore = scores[0]; // 3
    let worstScore = scores[0]; // 3
    let length  = scores.length;

    for(let i = 1; i < length;i++)
    {   
        if(scores[i] > bestScore) //  21 > 4
        {
            bestScore = scores[i]; // 21, 
            High ++; //1,
        }        
        if(scores[i] < worstScore)// 3 < 4 
        {
            worstScore = scores[i]; //3,21
            Low++; //1 ,2
        }
        
        
    }
    return([High,Low]);

}

console.log(App([3, 4 ,21 ,36 ,10 ,28 ,35 ,5 ,24 ,42]))