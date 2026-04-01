import { BookOpen } from 'lucide-react'

export function IntroductionView() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-14 lg:px-10">
      <div className="mb-12 flex items-center gap-4">
        <BookOpen className="h-10 w-10 text-brand-500" />
        <div>
          <h1 className="text-5xl font-medium text-slate-900">Introduction</h1>
          <p className="mt-4 text-xl leading-9 text-slate-600">
            Complete guide to using the Transpiler Framework in your projects.
          </p>
        </div>
      </div>

      <section className="mb-14">
        <h2 className="text-4xl font-medium text-slate-900">Introduction</h2>
        <p className="mt-6 text-xl leading-10 text-slate-600">
          The Transpiler Framework is a modern, extensible code transformation tool
          designed for JavaScript and TypeScript projects. It provides powerful
          features for code compilation, optimization, and transformation.
        </p>
        <p className="mt-6 text-xl leading-10 text-slate-600">
          With support for multiple output targets, plugin architecture, and
          comprehensive error reporting, the transpiler adapts to your workflow and
          requirements.
        </p>
      </section>
    </section>
  )
}