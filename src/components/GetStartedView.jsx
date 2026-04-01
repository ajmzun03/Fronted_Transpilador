import { Download, Globe, FileCode2, TerminalSquare } from 'lucide-react'
import { CodeBlock } from './CodeBlock'

const npmCode = 'npm install -g @transpiler/cli'
const yarnCode = 'yarn global add @transpiler/cli'

const stepsLeft = [
  'Abrir el panel de extensiones de VS Code',
  'Busca por "Transpilador Framework"',
  'Click en instalar y refresca VS Code',
]

const stepsRight = [
  'Ejecutar de manera online',
  'Escribe o pega tu código fuente',
  'Vea los resultados al instante y en tiempo real',
]

export function GetStartedView() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-14 lg:px-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-medium text-slate-900">¿Cómo comenzar?</h1>
        <p className="mt-4 text-xl leading-9 text-slate-600">
          Elige tu método preferido para empezar a usar el transpilador.
        </p>
      </div>

      <div className="mt-12 grid gap-8 xl:grid-cols-2">
        <article id="vscode" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="mb-6 inline-flex rounded-2xl bg-brand-50 p-4 text-brand-500">
            <FileCode2 className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-medium text-slate-900">Úsalo con VS Code</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Instala nuestra extensión para VS Code y disfruta de una integración perfecta con tu entorno de desarrollo.
          </p>

          <ol className="mt-8 space-y-5">
            {stepsLeft.map((step, index) => (
              <li key={step} className="flex items-center gap-4 text-lg text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-500">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <button className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-4 text-lg font-medium text-white transition hover:bg-brand-600">
            <Download className="h-5 w-5" />
            Instalar extensión
          </button>
        </article>

        <article id="online-playground" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600">
            <Globe className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-medium text-slate-900">Use el compilador online</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Prueba el transpilador directamente en tu navegador sin necesidad de instalación.
          </p>

          <ol className="mt-8 space-y-5">
            {stepsRight.map((step, index) => (
              <li key={step} className="flex items-center gap-4 text-lg text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-500">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <button className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-lg font-medium text-white transition hover:bg-emerald-600">
            <Globe className="h-5 w-5" />
            Ejecuta el compilador online
          </button>
        </article>
      </div>

      <article className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 flex items-center gap-3 text-slate-800">
          <TerminalSquare className="h-7 w-7" />
          <h2 className="text-4xl font-medium">Instalación en línea de comandos</h2>
        </div>
        <p className="mb-8 text-lg leading-8 text-slate-600">
          Instala el transpilador globalmente mediante npm o yarn.
        </p>

        <div className="space-y-6">
          <CodeBlock label="npm" code={npmCode} actionLabel="Copy" />
          <CodeBlock label="yarn" code={yarnCode} actionLabel="Copy" />
        </div>
      </article>
    </section>
  )
}
