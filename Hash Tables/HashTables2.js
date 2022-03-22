class HashTables{
    constructor(size)
    {
        this.data = new Array(size);
    }
    set = () =>
    {
        this.data('Grapes',1000);
    }
    get = () =>
    {
        this.data('Grapes');
    }
}

_hash(key)
{
    let hash = 0;
    for(let i=0;i<=keys.length;i++)
    {
        hash = (hash + key.charCodeAt(i)*i)%this.data.length;
    }
    return hash;
}
const myHashTable = new HashTables(50);
myHashTable._hash;
myHashTable.set('Grapes',1000);
myHashTable.get('Grapes');