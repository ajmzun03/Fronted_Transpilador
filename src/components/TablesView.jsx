import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { lexicalErrors, semanticErrors, syntaxErrors } from '../data/content'

const tableMap = {
  lexical: {
    label: 'Errores Léxicos',
    description: 'Estos errores ocurren durante la tokenización, generalmente debido a caracteres inválidos o literales mal formados.',
    rows: lexicalErrors,
  },
  syntax: {
    label: 'Errores Sintácticos',
    description: 'Estos errores ocurren cuando el parser encuentra una secuencia inesperada de tokens o una instrucción incompleta.',
    rows: syntaxErrors,
  },
  semantic: {
    label: 'Errores Semánticos',
    description: 'Estos errores ocurren cuando la sintaxis es válida pero el significado del programa es incorrecto.',
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
        <h1 className="text-5xl font-medium text-slate-900">Referencia de Errores</h1>
        <p className="mt-4 text-xl leading-9 text-slate-600">
          Explora y comprende los diferentes tipos de errores que pueden ocurrir durante la transpilación.
        </p>
      </div>

      <div className="mt-10 max-w-md">
        <label htmlFor="error-type" className="mb-2 block text-sm font-medium text-slate-700">
          Seleccionar tipo de error
        </label>
        <select
          id="error-type"
          value={currentType}
          onChange={(event) => setSearchParams({ type: event.target.value })}
          className="w-full rounded-2xl border border-brand-500 bg-white px-4 py-3 text-lg text-slate-800 outline-none ring-0 transition focus:ring-2 focus:ring-brand-100"
        >
          <option value="lexical">Errores Léxicos</option>
          <option value="syntax">Errores Sintácticos</option>
          <option value="semantic">Errores Semánticos</option>
        </select>
      </div>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-base leading-7 text-brand-700">
        {selected.description}
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50 text-sm uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Código</th>
              <th className="px-6 py-4 font-semibold">Mensaje</th>
              <th className="px-6 py-4 font-semibold">Descripción</th>
              <th className="px-6 py-4 font-semibold">Línea</th>
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
        <h2 className="text-3xl font-medium text-slate-900">Cómo manejar errores</h2>
        <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
          <li>• Revisa el código de error y el número de línea para ubicar el problema en tu código fuente.</li>
          <li>• Lee la descripción del error para entender qué salió mal.</li>
          <li>• Usa la documentación y ejemplos para aprender la sintaxis correcta.</li>
          <li>• Activa el modo de logs detallados para obtener más información del error.</li>
        </ul>
      </article>
    </section>
  )
}