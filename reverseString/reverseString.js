sentance = "Hii my name is Farhan";

let backward =[];

function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Hmm thats not good"
    }
    
    const totalItems = str.length -1 ;
    console.log(totalItems);

     for (let i = totalItems;i>=0;i--){
         backward.push(str[i]);
     }
    
     console.log(backward);
     return backward.join('');
    }
 console.log(reverse(sentance));