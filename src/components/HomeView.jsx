import { ArrowRight, Bolt, Shield, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CodeBlock } from './CodeBlock'
import { SectionHeader } from './SectionHeader'

const exampleCode = `// Input source code\nconst transpiler = new Transpiler({\n  target: 'es2020',\n  modules: 'commonjs',\n  optimize: true\n});\n\nconst result = await transpiler.compile('input.ts');\nconsole.log(result.output);`

const cards = [
  {
    icon: Bolt,
    title: 'Lightning Fast',
    description: 'Optimized transpilation with blazing fast performance',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Full type checking and validation during transpilation',
  },
  {
    icon: Layers3,
    title: 'Modular',
    description: 'Extensible architecture with plugin support',
  },
]

export function HomeView() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-14 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          badge="v1.0.0 - Production Ready"
          title="Modern Transpiler Framework"
          description="Build, transform, and compile your code with ease. A powerful transpiler designed for modern development workflows."
        />

        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-4 text-lg font-medium text-white transition hover:bg-brand-600"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/playground"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-lg font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Open Playground
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
        <CodeBlock label="Example" code={exampleCode} actionLabel="Preview" />
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h3 className="text-3xl font-medium text-slate-900">Documentation</h3>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Learn how to use the transpiler with detailed guides and API references.
          </p>
          <Link to="/documentation" className="mt-6 inline-flex text-lg font-medium text-brand-500 hover:text-brand-600">
            Read the docs →
          </Link>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h3 className="text-3xl font-medium text-slate-900">Error Reference</h3>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Browse lexical, syntax, and semantic error codes with solutions.
          </p>
          <Link to="/tables-errors" className="mt-6 inline-flex text-lg font-medium text-brand-500 hover:text-brand-600">
            View errors →
          </Link>
        </article>
      </div>
    </section>
  )
}
