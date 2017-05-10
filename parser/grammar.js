module.exports = {
    "block": [
        "begin statement-list end"
    ],
    "statement-list": [
        "statement listed"
    ],
    "listed": [
        "; listed",
        ""
    ],
    "expression": [
        "primary possible-op"
    ],
    "possible-op": [
        "relational-op primary",
        "additive-op primary",
        "multiplicative-op primary",
        ""
    ],
    "primary": [
        "identifier",
        "number",
        "( expression )"
    ],
    "relational-op": [
        "<",
        ">",
        "<=",
        ">=",
        "=",
        "<>"
    ],
    "additive-op": [
        "+",
        "-",
        "or"
    ],
    "multiplicative-op": [
        "*",
        "/",
        "and",
    ],
    "for-list": [
        "expression to expression"
    ],
    "else-block": [
        "else statement",
        ""
    ],
    "statement": [
        "block",
        "var identifier := expression",
        "if expression then statement else-block",
        "while expression do statement",
        "for identifier := for-list do statement",
        ""
    ]
}