export enum TokenType {
    MODEL= "MODEL", 
    IDENTIFIER="IDENTIFIER",
    TYPE="TYPE",
    STRING="STRING",
    NUMBER="NUMBER",
    AT="AT",
    LBRACE="LBRACE",
    RBRACE="RBRACE",
    LBRACKET="LBRACKET",
    RBRACKET="RBRACKET",
    LPAREN="LPAREN",
    RPAREN="RPAREN",
    OPTIONAL="OPTIONAL",
    COMMA="COMMA",
    SEMICOLON="SEMICOLON",
    EOF = "EOF",
}

export interface Token {
    type: TokenType,
    value: string
}