import { BookOpen } from 'lucide-react'
import { CodeBlock } from './CodeBlock'
import { docsExamples } from '../data/content'

export function ExamplesView() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-14 lg:px-10">
      <div className="mb-12 flex items-center gap-4">
        <BookOpen className="h-10 w-10 text-brand-500" />
        <div>
          <h1 className="text-5xl font-medium text-slate-900">Examples</h1>
          <p className="mt-4 text-xl leading-9 text-slate-600">
            Review practical examples and common configurations.
          </p>
        </div>
      </div>

      <section className="space-y-8">
        <CodeBlock label="Basic Usage" code={docsExamples.basic} />
        <CodeBlock label="Advanced Configuration" code={docsExamples.advanced} />
      </section>
    </section>
  )
}