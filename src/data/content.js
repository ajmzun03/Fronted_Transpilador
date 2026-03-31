export const lexicalErrors = [
  { code: 'LEX001', message: 'Invalid character', description: 'Unexpected character found in source code.', line: 12 },
  { code: 'LEX002', message: 'Unterminated string literal', description: 'String literal is not properly closed with a quote.', line: 25 },
  { code: 'LEX003', message: 'Invalid number format', description: 'Number literal contains invalid digits or format.', line: 8 },
  { code: 'LEX004', message: 'Invalid escape sequence', description: 'Unknown escape sequence used in string.', line: 34 },
  { code: 'LEX005', message: 'Unexpected EOF', description: 'End of file reached unexpectedly while scanning.', line: 156 },
]

export const syntaxErrors = [
  { code: 'SYN001', message: 'Missing semicolon', description: 'Expected semicolon at the end of the statement.', line: 18 },
  { code: 'SYN002', message: 'Unexpected token', description: 'A token appeared in a position where it is not allowed.', line: 29 },
  { code: 'SYN003', message: 'Unclosed block', description: 'A block opened with { was never closed.', line: 42 },
  { code: 'SYN004', message: 'Expected expression', description: 'Parser expected an expression but found another token.', line: 53 },
  { code: 'SYN005', message: 'Invalid function declaration', description: 'Function declaration syntax is malformed.', line: 87 },
]

export const semanticErrors = [
  { code: 'SEM001', message: 'Undefined variable', description: 'Variable is used before it is declared.', line: 10 },
  { code: 'SEM002', message: 'Type mismatch', description: 'Assigned value does not match the expected type.', line: 21 },
  { code: 'SEM003', message: 'Duplicate declaration', description: 'Identifier has already been declared in the same scope.', line: 44 },
  { code: 'SEM004', message: 'Invalid return type', description: 'Returned value does not satisfy the function return type.', line: 72 },
  { code: 'SEM005', message: 'Unknown module import', description: 'Imported module could not be resolved.', line: 101 },
]

export const docsExamples = {
  basic: `import { Transpiler } from '@transpiler/core';\n\nconst transpiler = new Transpiler({\n  target: 'es2020',\n  modules: 'commonjs'\n});\n\nconst result = transpiler.compile('input.ts');\nconsole.log(result.output);`,
  advanced: `const transpiler = new Transpiler({\n  target: 'es2020',\n  modules: 'esm',\n  sourceMaps: true,\n  minify: false,\n  plugins: ['decorators', 'jsx']\n});\n\nconst result = transpiler.compile('src/app.tsx');\nconsole.log(result.map);`,
}

export const playgroundDefaultCode = `function greet(name: string) {\n  return \`Hello, \${name}!\`;\n}\n\nconst user = 'Transpiler';\nconsole.log(greet(user));`

export const playgroundOutput = `Compiling file: input.ts\n✔ Type analysis complete\n✔ Syntax validation complete\n✔ Optimization complete\n\nOutput:\n\nfunction greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\n\nconst user = \"Transpiler\";\nconsole.log(greet(user));`
