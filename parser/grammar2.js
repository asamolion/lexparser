module.exports = [
    { 
        left: "block",
        right: [
            "begin statement-list end"
        ]
    },
    { 
        left: "statement-list",
        right: [
            "statement listed"
        ]
    },
    {
        left: "listed",
        right: [
            "; listed",
            null
        ]
    },
    { 
        left: "expression",
        right: [
            "primary possible-op"
        ]
    },
    { 
        left: "possible-op",
        right: [
            "relational-op expression",
            "additive-op expression",
            "multiplicative-op expression",
            null
        ]
    },
    { 
        left: "primary",
        right: [
            "identifier", 
            "number", 
            "( expression )"
        ]
    },
    { 
        left: "relational-op",
        right: [
            "<", 
            "<=", 
            "=", 
            "<>", 
            "=>", 
            ">"
        ]
    },
    { 
        left: "additive-op",
        right: [
            "+", 
            "-", 
            "or"
        ]
    },
    { 
        left: "multiplicative-op",
        right: [
            "*", 
            "/", 
            "and"
        ]
    },
    { 
        left: "for-list",
        right: [
            "expression to expression"
        ]
    },
    {
        left: "else-block",
        right: [
            "else statement",
            null
        ]
    },
    { 
        left: "statement",
        right: [
            null,
            "variable := expression",
            "block",
            "if expression then statement else-block",
            "while expression do statement",
            "for varid := for-list do statement"
        ]
    }    
]