import { BookOpen } from 'lucide-react'

export function ApiReferenceView() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-14 lg:px-10">
      <div className="mb-12 flex items-center gap-4">
        <BookOpen className="h-10 w-10 text-brand-500" />
        <div>
          <h1 className="text-5xl font-medium text-slate-900">API Reference</h1>
          <p className="mt-4 text-xl leading-9 text-slate-600">
            Explore the main capabilities and key features of the transpiler.
          </p>
        </div>
      </div>

      <section className="mb-14">
        <h2 className="text-4xl font-medium text-slate-900">Key Features</h2>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <ul className="space-y-5 text-xl text-slate-700">
            <li>• Multi-target compilation (ES5, ES2015, ES2020, etc.)</li>
            <li>• TypeScript support with full type checking</li>
            <li>• Extensible plugin system</li>
            <li>• Source map generation for debugging</li>
            <li>• Comprehensive error detection and reporting</li>
          </ul>
        </div>
      </section>
    </section>
  )
}