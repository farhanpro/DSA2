const boxes =['a','b','c','d','e','f'];
function looper(array){
    for(let i = 0 ;i<array.length;i++){
        for(let j= 0;j< array.length;j++ ){
            console.log(array[i],array[j]);
        }
    }
}
looper(boxes);