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
            console.log("This is the character:", char);

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
                    value: "@"
                })
                this.position++;
                continue;
            }

            if(char === ":"){
                tokens.push({
                    type: TokenType.SEMICOLON,
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

                tokens.push({
                    type: TokenType.STRING,
                    value: value
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

                tokens.push({
                    type: TokenType.STRING,
                    value: value
                })
                this.position++;
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
                this.position++;
                continue;
            }

        }

        return tokens;
    }
}