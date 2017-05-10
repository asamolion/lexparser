'use strict';
// imports
var Token = require('./token/token.js'),
    Lexer = require('./lexer/lexer.js'),
    Parser = require('./parser/parser.js').Parser;
    // grammar = require('./parser/grammarcheck.js');

let lex = new Lexer('./input.pas'),
    par = Object.create(Parser);

// console.log(lex.parse());

Parser.parse(lex.parse());










