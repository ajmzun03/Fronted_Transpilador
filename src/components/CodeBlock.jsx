import { Copy } from 'lucide-react'
import { tokenizeChapin } from '../utils/chapinTokenizer'

const tokenClasses = {
  plain: 'text-slate-800',
  keyword: 'text-fuchsia-600 font-medium',
  type: 'text-sky-700 font-medium',
  literal: 'text-blue-600 font-medium',
  exception: 'text-cyan-700 font-medium',
  builtin: 'text-rose-600 font-medium',
  identifier: 'text-slate-900',
  string: 'text-green-600',
  number: 'text-amber-600',
  comment: 'text-slate-500 italic',
  operator: 'text-slate-900',
  bracket: 'text-slate-900 font-semibold',
  delimiter: 'text-slate-700'
}

export function CodeBlock({ label, code, actionLabel = 'Copy' }) {
  const tokens = tokenizeChapin(code)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (error) {
      console.error('No se pudo copiar el código:', error)
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-zinc-300 bg-[#f3f4f6]">
      <div className="flex items-center justify-between border-b border-zinc-300 bg-white px-4 py-3 text-sm text-black">
        <span>{label}</span>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-md border border-zinc-400 bg-white px-3 py-1.5 text-black transition hover:bg-zinc-50"
        >
          <Copy className="h-4 w-4" />
          {actionLabel}
        </button>
      </div>

      <pre className="overflow-x-auto px-4 py-5 text-[16px] leading-8">
        <code className="font-mono">
          {tokens.map((token, index) => (
            <span key={`${token.type}-${index}`} className={tokenClasses[token.type] || tokenClasses.plain}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}