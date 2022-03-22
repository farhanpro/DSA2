// In this i have buid an array from scratch ...
// Using Classes and Objects
class Myarray{
    constructor(){
        this.length = 0 ;
        this.data = {};
    }
    getdata(index){
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length --;
        return lastItem;
    }
    delete(index){
        const item = this.data[index]; 
        this.shiftItems(index);
    }
    shiftItems( index ){
        for(let i = index; i < this.length -1 ; i++){
           delete this.data[this.length-1];
           this.length --;
        }
        // this.data[this.length-1]
    }
}
const newArray = new Myarray;
newArray.push("hi"); 
newArray.push("You");
newArray.push("!");
newArray.delete(1)
console.log(newArray);