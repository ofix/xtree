class Stack{
    constructor()
    {
        this._stack_size = 20;
        this._container = [];
        this._ptr = null;
    }
    isEmpty()
    {
        return this._ptr==-1;
    }
    isFull()
    {
        return this._ptr == this._stack_size-1;
    }
    push(data)
    {
        if(this.isFull())
            return false;
        this._container.push(data);
        this._ptr++;
    }
    pop(){
        if(this.isEmpty())
            return false;
        this._ptr--;
        return  this._container.shift();
    }
}