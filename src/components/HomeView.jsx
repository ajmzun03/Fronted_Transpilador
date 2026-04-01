import { ArrowRight, User, Play, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CodeBlock } from './CodeBlock'
import { SectionHeader } from './SectionHeader'

const Ejemplo_codigo = `banda Robot {\n\tcabal energia;\nbarrio:\n\tvacio cargar(cabal energia){\n\t\tvos->energia = energia;\n\t}\n}`

const cards = [
  {
    icon: User,
    title: 'Creadores',
    description: 'Adrian Díaz, Carlos Hernández, Angel Martínez',
  },
  {
    icon: Play,
    title: 'Ejecutable',
    description: 'Full type checking and validation during transpilation',
  },
  {
    icon: Download,
    title: 'Exportable',
    description: 'Puedes exportar bitácoras y también el código generado',
  },
]

export function HomeView() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-14 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          badge="Versión - v1.0.0"
          title="Compilador ChapinScript"
          description="Descubre las funcionalidades de ChapinScript en esta guía de usuario."
        />

        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/Comenzar"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-4 text-lg font-medium text-white transition hover:bg-brand-600"
          >
            Cómo usar el transpilador
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/playground"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-lg font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Área de pruebas
          </Link>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6 inline-flex rounded-2xl bg-brand-50 p-4 text-brand-500">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-medium text-slate-900">{title}</h2>
            <p className="mt-4 max-w-sm text-lg leading-8 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <CodeBlock label="Ejemplo" code={Ejemplo_codigo} actionLabel="Copiar" />
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h3 className="text-3xl font-medium text-slate-900">Documentación</h3>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Aprende a usar el transpilador con guías detalladas y referencias de la API.
          </p>
          <Link to="/Documentacion" className="mt-6 inline-flex text-lg font-medium text-brand-500 hover:text-brand-600">
            Ir a la documentación →
          </Link>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h3 className="text-3xl font-medium text-slate-900">Tabla de errores</h3>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Consulta los códigos de error léxicos, sintácticos y semánticos con sus soluciones.
          </p>
          <Link to="/tables-errors" className="mt-6 inline-flex text-lg font-medium text-brand-500 hover:text-brand-600">
            Ir a tabla de errores →
          </Link>
        </article>
      </div>
    </section>
  )
}
