export const lexicalErrors = [
  { code: 'LEX001', message: 'Carácter inválido', description: 'Se encontró un carácter inesperado en el código fuente.', line: 12 },
  { code: 'LEX002', message: 'Cadena sin cerrar', description: 'El literal de cadena no está correctamente cerrado con comillas.', line: 25 },
  { code: 'LEX003', message: 'Formato de número inválido', description: 'El literal numérico contiene dígitos o un formato incorrecto.', line: 8 },
  { code: 'LEX004', message: 'Secuencia de escape inválida', description: 'Se utilizó una secuencia de escape desconocida en la cadena.', line: 34 },
  { code: 'LEX005', message: 'Fin de archivo inesperado', description: 'Se alcanzó el final del archivo inesperadamente durante el análisis.', line: 156 },
]

export const syntaxErrors = [
  { code: 'SYN001', message: 'Falta punto y coma', description: 'Se esperaba un punto y coma al final de la instrucción.', line: 18 },
  { code: 'SYN002', message: 'Token inesperado', description: 'Un token apareció en una posición donde no está permitido.', line: 29 },
  { code: 'SYN003', message: 'Bloque sin cerrar', description: 'Un bloque abierto con { nunca fue cerrado.', line: 42 },
  { code: 'SYN004', message: 'Se esperaba una expresión', description: 'El parser esperaba una expresión pero encontró otro token.', line: 53 },
  { code: 'SYN005', message: 'Declaración de función inválida', description: 'La sintaxis de la declaración de la función es incorrecta.', line: 87 },
]

export const semanticErrors = [
  { code: 'SEM001', message: 'Variable no definida', description: 'La variable se utiliza antes de ser declarada.', line: 10 },
  { code: 'SEM002', message: 'Tipo incompatible', description: 'El valor asignado no coincide con el tipo esperado.', line: 21 },
  { code: 'SEM003', message: 'Declaración duplicada', description: 'El identificador ya ha sido declarado en el mismo ámbito.', line: 44 },
  { code: 'SEM004', message: 'Tipo de retorno inválido', description: 'El valor retornado no cumple con el tipo de retorno de la función.', line: 72 },
  { code: 'SEM005', message: 'Importación de módulo desconocido', description: 'No se pudo resolver el módulo importado.', line: 101 },
]

export const docsExamples = {
  basic: `import { Transpiler } from '@transpiler/core';\n\nconst transpiler = new Transpiler({\n  target: 'es2020',\n  modules: 'commonjs'\n});\n\nconst result = transpiler.compile('input.ts');\nconsole.log(result.output);`,
  advanced: `const transpiler = new Transpiler({\n  target: 'es2020',\n  modules: 'esm',\n  sourceMaps: true,\n  minify: false,\n  plugins: ['decorators', 'jsx']\n});\n\nconst result = transpiler.compile('src/app.tsx');\nconsole.log(result.map);`,
}

export const playgroundDefaultCode = `function greet(name: string) {\n  return \`Hola, \${name}!\`;\n}\n\nconst user = 'Transpilador';\nconsole.log(greet(user));`

export const playgroundOutput = `Compilando archivo: input.ts\n✔ Análisis de tipos completado\n✔ Validación sintáctica completada\n✔ Optimización completada\n\nSalida:\n\nfunction greet(name) {\n  return "Hola, " + name + "!";\n}\n\nconst user = "Transpilador";\nconsole.log(greet(user));`