class Token {
    constructor(type, value) {
        this.type = type; // Token type: ID, NUM etc
        this.value = value; // Token value:
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }
    
    print() {
        console.log(this.type + ' ' + this.value);
    }
}


module.exports = Token;