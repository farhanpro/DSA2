 
    let backward = [];
    let value = "Farhan";
    let lencalculator = value.length -1;
 const word2 = () => 
 {  
    
    for(let i = lencalculator;i>= 0 ; i-- ){
        backward.push(value[i]);
    }
    return backward.join("");
}

console.log(word2());