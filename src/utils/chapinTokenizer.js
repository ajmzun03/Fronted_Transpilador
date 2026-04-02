import chapinTokens from '../data/chapinTokens.json'

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function buildWordRegex(words) {
  if (!words.length) return null
  return new RegExp(`^\\b(?:${words.map(escapeRegex).join('|')})\\b`)
}

function buildSymbolRegex(symbols) {
  if (!symbols.length) return null

  const sorted = [...symbols].sort((a, b) => b.length - a.length)
  return new RegExp(`^(?:${sorted.map(escapeRegex).join('|')})`)
}

const keywordRegex = buildWordRegex(chapinTokens.keywords)
const typeRegex = buildWordRegex(chapinTokens.types)
const literalRegex = buildWordRegex(chapinTokens.literals)
const exceptionRegex = buildWordRegex(chapinTokens.exceptions)
const builtinRegex = buildWordRegex(chapinTokens.builtins)

const operatorRegex = buildSymbolRegex(chapinTokens.operators)
const bracketRegex = buildSymbolRegex(chapinTokens.brackets)
const delimiterRegex = buildSymbolRegex(chapinTokens.delimiters)

const stringRegex = /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/
const commentRegex = /^\/\/.*/
const numberRegex = /^\b\d+(?:\.\d+)?\b/
const identifierRegex = /^\b[a-zA-Z_]\w*\b/
const whitespaceRegex = /^\s+/

export function tokenizeChapin(code = '') {
  const tokens = []
  let remaining = code

  while (remaining.length > 0) {
    let match

    if ((match = remaining.match(commentRegex))) {
      tokens.push({ type: 'comment', value: match[0] })
    } else if ((match = remaining.match(stringRegex))) {
      tokens.push({ type: 'string', value: match[0] })
    } else if ((match = remaining.match(keywordRegex))) {
      tokens.push({ type: 'keyword', value: match[0] })
    } else if ((match = remaining.match(typeRegex))) {
      tokens.push({ type: 'type', value: match[0] })
    } else if ((match = remaining.match(literalRegex))) {
      tokens.push({ type: 'literal', value: match[0] })
    } else if ((match = remaining.match(exceptionRegex))) {
      tokens.push({ type: 'exception', value: match[0] })
    } else if ((match = remaining.match(builtinRegex))) {
      tokens.push({ type: 'builtin', value: match[0] })
    } else if ((match = remaining.match(numberRegex))) {
      tokens.push({ type: 'number', value: match[0] })
    } else if ((match = remaining.match(operatorRegex))) {
      tokens.push({ type: 'operator', value: match[0] })
    } else if ((match = remaining.match(bracketRegex))) {
      tokens.push({ type: 'bracket', value: match[0] })
    } else if ((match = remaining.match(delimiterRegex))) {
      tokens.push({ type: 'delimiter', value: match[0] })
    } else if ((match = remaining.match(identifierRegex))) {
      tokens.push({ type: 'identifier', value: match[0] })
    } else if ((match = remaining.match(whitespaceRegex))) {
      tokens.push({ type: 'plain', value: match[0] })
    } else {
      tokens.push({ type: 'plain', value: remaining[0] })
      match = [remaining[0]]
    }

    remaining = remaining.slice(match[0].length)
  }

  return tokens
}