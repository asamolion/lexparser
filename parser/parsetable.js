module.exports = {
    "block": {
        "begin": "begin statement-list end"
    }, 
    "statement-list": {
        "var": "statement listed",
        "if": "statement listed",
        "while": "statement listed",
        "for": "statement listed",
        "begin": "statement listed",
        "semicolon": "statement listed",
        "identifier": "statement listed",
    },
    "listed": {
        "semicolon": "semicolon statement listed",
        "end": "",
        "for": "statement listed",
    },
    "expression": {
        "identifier": "primary possible-op",
        "number": "primary possible-op",
        "leftparen": "primary possible-op"
    }, 
    "possible-op": {
        "lesser": "relational-op primary",
        "greater": "relational-op primary",
        "lesserequal": "relational-op primary",
        "greaterequal": "relational-op primary",
        "notequal": "relational-op primary",
        "equal": "relational-op primary",
        "plus": "additive-op primary",
        "minus": "additive-op primary",
        "or": "additive-op primary",
        "multiply": "multiplicative-op primary",
        "divide": "multiplicative-op primary",
        "and": "multiplicative-op primary",
        "then": "",
        "do": "",
        "to": "",
        "rightparen": "",
        "else": "",
        "semicolon": "",
        "end": "",
    },
    "primary": {
        "identifier":"identifier",
        "number": "number",
        "leftparen": "leftparen expression rightparen"
    },
    "relational-op": {
        "lesser": "lesser",
        "greater": "greater",
        "lesserequal": "lesserequal",
        "greaterequal": "greaterequal",
        "notequal": "notequal",
        "equal": "equal"
    },
    "additive-op": {
        "plus":"plus",
        "minus":"minus",
        "or":"or"
    },
    "multiplicative-op": {
        "multiply":"multiply",
        "divide":"divide",
        "and":"and"
    },
    "for-list": {
        "identifier": "expression to expression",
        "number": "expression to expression",
        "leftparen": "expression to expression",
    },
    "else-block": {
        "else": "else statement",
        "semicolon": "",
        "end": ""
    },
    "statement": {
        "begin": "block",
        "var": "var identifier assign expression",
        "identifier": "identifier assign expression",
        "if": "if expression then statement else-block",
        "else": "else-block",
        "while": "while expression do statement",
        "for": "for identifier assign for-list do statement",
        "semicolon": "",
        "end": ""
    }
}