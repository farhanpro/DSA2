 value = "Farhan name is reversed"; // String Value
function reverser(value){

    if(typeof value !== 'string'){
        console.log(value," is not a string value" );
    }
    else{
    backward = [];
    lencalculator = value.length -1;
    console.log(lencalculator);
    for(let i = lencalculator;i>= 0 ; i-- ){
        console.log(backward.push(value[i]));
    }}
    return backward.join("");
    
}
console.log(reverser(value));