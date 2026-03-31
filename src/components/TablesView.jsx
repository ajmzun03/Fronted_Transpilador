import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { lexicalErrors, semanticErrors, syntaxErrors } from '../data/content'

const tableMap = {
  lexical: {
    label: 'Lexical Errors',
    description: 'These errors occur during tokenization, often because invalid characters or malformed literals are encountered.',
    rows: lexicalErrors,
  },
  syntax: {
    label: 'Syntax Errors',
    description: 'These errors are produced when the parser finds an unexpected token sequence or an incomplete statement.',
    rows: syntaxErrors,
  },
  semantic: {
    label: 'Semantic Errors',
    description: 'These errors happen when the syntax is valid but the meaning of the program is incorrect.',
    rows: semanticErrors,
  },
}

export function TablesView() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentType = searchParams.get('type') || 'lexical'

  const selected = useMemo(() => tableMap[currentType] || tableMap.lexical, [currentType])

  return (
    <section className="mx-auto max-w-7xl px-8 py-14 lg:px-10">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-medium text-slate-900">Error Reference</h1>
        <p className="mt-4 text-xl leading-9 text-slate-600">
          Browse and understand different types of errors that can occur during transpilation.
        </p>
      </div>

      <div className="mt-10 max-w-md">
        <label htmlFor="error-type" className="mb-2 block text-sm font-medium text-slate-700">
          Select Error Type
        </label>
        <select
          id="error-type"
          value={currentType}
          onChange={(event) => setSearchParams({ type: event.target.value })}
          className="w-full rounded-2xl border border-brand-500 bg-white px-4 py-3 text-lg text-slate-800 outline-none ring-0 transition focus:ring-2 focus:ring-brand-100"
        >
          <option value="lexical">Lexical Errors</option>
          <option value="syntax">Syntax Errors</option>
          <option value="semantic">Semantic Errors</option>
        </select>
      </div>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-base leading-7 text-brand-700">
        {selected.description}
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50 text-sm uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Error Code</th>
              <th className="px-6 py-4 font-semibold">Message</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Line</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-base text-slate-700">
            {selected.rows.map((row) => (
              <tr key={row.code} className="hover:bg-slate-50">
                <td className="px-6 py-5">
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-700">{row.code}</span>
                </td>
                <td className="px-6 py-5 font-medium text-slate-900">{row.message}</td>
                <td className="px-6 py-5">{row.description}</td>
                <td className="px-6 py-5">{row.line}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-3xl font-medium text-slate-900">How to Handle Errors</h2>
        <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
          <li>• Check the error code and line number to locate the issue in your source code.</li>
          <li>• Read the error description to understand what went wrong.</li>
          <li>• Use the documentation and examples to learn the correct syntax.</li>
          <li>• Enable verbose logging for more detailed error information.</li>
        </ul>
      </article>
    </section>
  )
}
