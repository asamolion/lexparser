// Transition table import
var transtable = require('./transtable.json'),
    symboltable = require('../symboltable.json'),
    Token = require('../token/token.js'),
    fs = require('fs');

class Lexer {
    constructor(filePath) {
        this.currentToken;
        this.inputString = this.readFile(filePath);
    }

    parse() {
        // let resultArray = []; // array of Token objects to be returned
        let resultArray = this.inputString
            .trim() // remove whitespace from both ends
            .replace(/\{[\s|\S]*}/g, '') // remove all comments
            .replace(/;/g, ' ; ') // hack to insert a space before each semicolon
            .replace(/[\s|\n|\r]+/g, ' ') // replace multiple whitespaces, newlines and carriage returns with a single whitespace
            .split(/[\s]/) // split on whitespace, 1 between each token
            .map(this.parseToken); // map the parseToken function to the list of tokens
        return resultArray;
    }

    // parses a single token string and returns corresponding Token object
    parseToken(token) {
        let state = 0;
        for (let i = 0; i < token.length; i++) {
            state = transtable[state][charToColumn(token.charAt(i))];
        }
        let tokenObject = new Token(stateMap(state, token), token);
        if (tokenObject.getType() === undefined) {
            console.log("Error at token: " + token);
            process.exit();
        }
        return tokenObject;
    }

    go() {
        console.log(handleKeywords('vaR9'));
    }

    // returns the contents of the file
    readFile(filePath) {
        return fs.readFileSync(filePath).toString();
    }
}

// HELPER FUNCTIONS

function charToColumn(char) {
    if (char.match(/[0-9]/)) {
        return "[0-9]";
    } else if (char.match(/[A-z]/)) {
        return "[a-z]";
    } else {
        return char;
    }
}

// mapping final state value to token type
function stateMap(state, token) {
    switch (state) {
        case 3:
        case 1:
            return "number";
        case 4:
            return "plus";
        case 5:
            return "minus";
        case 6:
            return "multiply";
        case 7:
            return "divide";
        case 8:
            return handleKeywords(token); // keyword handling 
        case 9:
            return "lesser";
        case 10:
            return "lesserequal";
        case 11:
            return "notequal";
        case 12:
            return "greater";
        case 13:
            return "greaterequal";
        case 14:
            return "equal";
        case 16:
            return "assign";
        case 17:
            return "semicolon";
        case 18:
            return "leftparen";
        case 19:
            return "rightparen";

    }
}

// function to handle keywords
// if input string is a keyword then return keyword else return as identifier
function handleKeywords(input) {
    input = input.toLowerCase();
    if (symboltable[input]) {
        return symboltable[input];
    } else {
        return "identifier";
    }
}

module.exports = Lexer;