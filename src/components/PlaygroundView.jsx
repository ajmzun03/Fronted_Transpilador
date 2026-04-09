import { FileCode2, Play, RefreshCcw, TerminalSquare } from 'lucide-react'
import { useState } from 'react'
import { playgroundDefaultCode, playgroundOutput } from '../data/content'

const outputTabs = ['Salida', 'Documentación', 'Errores']

export function PlaygroundView() {
  const [code, setCode] = useState(playgroundDefaultCode)
  const [tab, setTab] = useState('Salida')

  return (
    <section className="h-full px-8 py-8 lg:px-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-medium text-slate-900">Área de pruebas</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Prueba tu código fuente en una vista dividida. Usa el panel izquierdo para editar el código y el derecho para ver la salida, documentación o tablas de errores.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            <RefreshCcw className="h-4 w-4" />
            Reiniciar
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600">
            <Play className="h-4 w-4" />
            Ejecutar
          </button>
        </div>
      </div>

      <div className="grid h-[calc(100vh-220px)] min-h-[600px] gap-6 xl:grid-cols-2">
        <article className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <FileCode2 className="h-4 w-4 text-brand-500" />
              Código fuente
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">input.ts</span>
          </div>
          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="code-scrollbar min-h-0 flex-1 resize-none border-0 bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-100 outline-none"
            spellCheck={false}
          />
        </article>

        <article className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <TerminalSquare className="h-4 w-4 text-brand-500" />
              Panel de inspección
            </div>
            <div className="flex items-center gap-2">
              {outputTabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    tab === item ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="main-scrollbar flex-1 overflow-y-auto p-6">
            {tab === 'Salida' ? (
              <pre className="rounded-2xl bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-100">
                <code>{playgroundOutput}</code>
              </pre>
            ) : null}

            {tab === 'Documentación' ? (
              <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
                <h3 className="text-2xl font-medium text-slate-900">Referencia rápida</h3>
                <p className="text-base leading-7">
                  Usa este panel para consultar documentación mientras el editor permanece visible, manteniendo el diseño 50/50 del área de pruebas.
                </p>
                <ul className="space-y-3 text-base leading-7">
                  <li>• Consulta las opciones esperadas del transpilador.</li>
                  <li>• Abre ejemplos sin salir del editor.</li>
                  <li>• Mantén la documentación y el código lado a lado.</li>
                </ul>
              </div>
            ) : null}

            {tab === 'Errores' ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-50 text-sm text-slate-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">Código</th>
                      <th className="px-4 py-3 font-medium">Mensaje</th>
                      <th className="px-4 py-3 font-medium">Línea</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3">SYN001</td>
                      <td className="px-4 py-3">Falta punto y coma</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">SEM002</td>
                      <td className="px-4 py-3">Tipo incompatible</td>
                      <td className="px-4 py-3">21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  )
}