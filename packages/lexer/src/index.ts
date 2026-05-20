import { Token, TokenType } from "@repo/types"

export class Lexer {
    private position = 0;

    constructor(private input: string) {}

    private currentChar(): string  {
        return this.input[this.position] ?? "";
    }

    tokenize(): Token[] {
        const tokens: Token[] = [];

        while(this.position < this.input.length){
            const char = this.currentChar();

            if(/\s/.test(char)) {
                this.position++;
                continue;
            }

            if(char === "{") {
                tokens.push({
                    type: TokenType.LBRACE,
                    value: "{"
                })
                this.position++;
                continue;
            }

            if(char === "}") {
                tokens.push({
                    type: TokenType.RBRACE,
                    value: "}"
                })
                this.position++;
                continue;
            }

            if(char === "[") {
                tokens.push({
                    type: TokenType.LBRACKET,
                    value: "["
                })
                this.position++;
                continue;
            }

            if(char === "]") {
                tokens.push({
                    type: TokenType.RBRACKET,
                    value: "]"
                })
                this.position++;
                continue;
            }

            if(char === "(") {
                tokens.push({
                    type: TokenType.LPAREN,
                    value: "("
                })
                this.position++;
                continue;
            }

            if(char === ")") {
                tokens.push({
                    type: TokenType.RPAREN,
                    value: ")"
                })
                this.position++;
                continue;
            }

            if(char === "?") {
                tokens.push({
                    type: TokenType.OPTIONAL,
                    value: "?"
                })
                this.position++;
                continue;
            }

            if(char === "@") {
                tokens.push({
                    type: TokenType.AT,
                    value: "@"
                })
                this.position++;
                continue;
            }

            if(char === ","){
                tokens.push({
                    type: TokenType.COMMA,
                    value: ","
                })
                this.position++;
                continue;
            }

            if(char === ":"){
                tokens.push({
                    type: TokenType.COLON,
                    value: ":"
                })
                this.position++;
                continue;
            }

            if(char === '"') {
                this.position++;
                let value = "";
                while(this.position < this.input.length && this.currentChar() !== '"') {
                    value+= this.currentChar();
                    this.position++;
                }
                this.position++; 
                tokens.push({
                    type: TokenType.STRING,
                    value: value
                })

                continue;
            }

            if(/[0-9]/.test(char)) {
                let value = "";
                while(this.position < this.input.length && /[0-9]/.test(this.currentChar())) {
                    value += this.currentChar();
                    this.position++;
                }

                tokens.push({
                    type: TokenType.NUMBER,
                    value: value
                })

                continue;
            }

            if(/[a-zA-Z]/.test(char)) {
                let value = "";

                while(this.position < this.input.length &&/[a-zA-Z]/.test(this.currentChar())) {
                    value += this.currentChar();
                    this.position++;
                }

                if(value === "model") {
                    tokens.push({
                        type: TokenType.MODEL,
                        value
                    })
                } else if(["Int", "String", "Boolean", "DateTime"].includes(value)) {
                    tokens.push({
                        type: TokenType.TYPE,
                        value
                    })
                } else {
                    tokens.push({
                        type: TokenType.IDENTIFIER,
                        value
                    })
                }

                continue;
            }

            throw new Error(`Unexpected character: ${char}`)
        }
        
        tokens.push({
            type: TokenType.EOF,
            value: "",
        })

        return tokens;
    }
}