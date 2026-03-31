import { Copy } from 'lucide-react'

export function CodeBlock({ label, code, actionLabel = 'Copy' }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-soft">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 text-sm text-slate-300">
        <span>{label}</span>
        <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <Copy className="h-4 w-4" />
          {actionLabel}
        </button>
      </div>
      <pre className="code-scrollbar overflow-x-auto px-6 py-6 text-sm leading-7 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
