var grammar = require('./grammar.js'),
    parsetable = require('./parsetable.js');

// result = [""];
// for (var key in grammar) {
//     result = result.concat(grammar[key]); 
// }
// // console.log(result);
// result = result.filter(function(current) {
//     if (current.match(/expression/i)) {
//         return true;
//     } else {
//         return false;
//     }
// });
// // console.log(result);
// // console.log(result);
// let followSet = [];

// result.forEach(function(element, index, array) {
//     element = element.split(" expression ");
//     console.log(element);
// });


let Parser = {
    isNonterminal: function (token) {
        if (grammar[token] === undefined) {
            return false;
        } else {
            return true;
        }
    },
    getFirstSet: function () { // automatic retrieval of complete First Set of the entire grammar. Sadly, I was unable to use this function
        let resultSet = {};

        for (var start in grammar) {
            resultSet[start] = flatten(Parser.getFirst(start));
        }

        return resultSet;
    },
    getFirst: function (token) { // automatic first calculation for a token
        if (Parser.isNonterminal(token)) {
            return grammar[token]
                .map(function (current) {
                    return current.split(" ")[0];
                })
                .map(Parser.getFirst);
        } else {
            return token;
        }
    },
    parse: function(tokenArray) {
        var stack = ["$", "block"], // initiate stack with starting production
            current = 0,
            parseCheck = true;

        while (current != tokenArray.length) { // loop until the input array has been exhausted
            let stackTop = stack.pop(), // top string on the stack
                currentToken = tokenArray[current]; // the current token
                // console.log(stack);
                // console.log(stackTop + ' ' + currentToken.type);
            if (stackTop == "") continue; // hack to disregard empty productions

            if (Parser.isNonterminal(stackTop)) { // if the top is nonterminal
                let production = parsetable[stackTop][currentToken.type]; // then get the production from the parsetable
                if (production === undefined) { // if there is no production then there is an error
                    parseCheck = false;
                    break;
                }
                production = production.split(' ').reverse(); // reverse the production string
                for (let i = 0, length = production.length; i < length; i++) {
                    stack.push(production[i]); // and push onto the stack 
                }
                continue;
            } else { // else match the stackTop and the currentToken
                if (stackTop != currentToken.type) { // error if they don't match
                    parseCheck = false; 
                    break;            
                }
            }
            current++;
        }
        
        if (stack.pop() !== "$") parseCheck = false; // if stack isn't empty at the end of parsing then there is error

        if (parseCheck) {
            console.log("Parsing successful");
        } else {
            console.log("Parsing failed");
        }
    }
}

// utility function to flatten an array
function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';

    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if (!array.length) {
        return result;
    }

    node = nodes.pop();

    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // we reverse result to restore the original order
    return result;
}


module.exports.Parser = Parser;