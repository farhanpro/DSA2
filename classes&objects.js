class games{
    constructor(name,type,size,typeoff){
        this.name = name;
        this.type = type;
        this.size = size;
        this.typeoff = typeoff;
    }
    prine(){
        console.log("Data loded from class ",this.name," is the name of the game ",this.type, " Type of the game", this.size ," Size of Game ", this.typeoff , "Type of the game"   )
    }
}
obj1 = new games("Hitman ","PC","19 GB","ACTION");
console.log(obj1);
console.log(obj1.type);
console.log(obj1.size);
console.log(obj1.typeoff);
obj1.prine();