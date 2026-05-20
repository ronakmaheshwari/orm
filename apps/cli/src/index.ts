import fs from "fs"
import path from "path"
import {Lexer} from "@repo/lexer"

const schemaPath = path.join(
  process.cwd(),
  "../../packages/schema/orm/schema.orm"
)

const schema = fs.readFileSync(schemaPath, "utf-8")

const lexer = new Lexer(schema)

const tokens = lexer.tokenize()

console.log("\nTOKENS:\n")

console.dir(tokens, { depth: null });


// TOKENS:

// [
//   { type: 'MODEL', value: 'model' },
//   { type: 'IDENTIFIER', value: 'User' },
//   { type: 'LBRACE', value: '{' },
//   { type: 'IDENTIFIER', value: 'id' },
//   { type: 'TYPE', value: 'Int' },
//   { type: 'AT', value: '@' },
//   { type: 'IDENTIFIER', value: 'id' },
//   { type: 'AT', value: '@' },
//   { type: 'IDENTIFIER', value: 'default' },
//   { type: 'LPAREN', value: '(' },
//   { type: 'IDENTIFIER', value: 'autoincrement' },
//   { type: 'LPAREN', value: '(' },
//   { type: 'RPAREN', value: ')' },
//   { type: 'RPAREN', value: ')' },
//   { type: 'IDENTIFIER', value: 'name' },
//   { type: 'TYPE', value: 'String' },
//   { type: 'AT', value: '@' },
//   { type: 'IDENTIFIER', value: 'default' },
//   { type: 'LPAREN', value: '(' },
//   { type: 'STRING', value: 'John' },
//   { type: 'RPAREN', value: ')' },
//   { type: 'IDENTIFIER', value: 'age' },
//   { type: 'TYPE', value: 'Int' },
//   { type: 'AT', value: '@' },
//   { type: 'IDENTIFIER', value: 'default' },
//   { type: 'LPAREN', value: '(' },
//   { type: 'NUMBER', value: '18' },
//   { type: 'RPAREN', value: ')' },
//   { type: 'IDENTIFIER', value: 'email' },
//   { type: 'TYPE', value: 'String' },
//   { type: 'IDENTIFIER', value: 'password' },
//   { type: 'TYPE', value: 'String' },
//   { type: 'IDENTIFIER', value: 'createdAt' },
//   { type: 'TYPE', value: 'DateTime' },
//   { type: 'IDENTIFIER', value: 'isDeleted' },
//   { type: 'TYPE', value: 'Boolean' },
//   { type: 'RBRACE', value: '}' },
//   { type: 'EOF', value: '' }
// ]
