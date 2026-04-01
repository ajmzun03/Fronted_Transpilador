import { useParams } from 'react-router-dom'
import docs from '../data/docs.json'
import { CodeBlock } from './CodeBlock'

export function DocumentationPageView() {
  const { slug } = useParams()

  const doc = docs.find((d) => d.slug === slug)

  if (!doc) {
    return <div className="p-10">Documento no encontrado</div>
  }

  return (
    <section className="mx-auto max-w-6xl px-8 py-14 lg:px-10">
      <h1 className="text-5xl font-medium text-slate-900">{doc.title}</h1>

      {doc.description && (
        <p className="mt-4 text-xl text-slate-600">{doc.description}</p>
      )}

      <div className="mt-10 space-y-6">
        {doc.content.map((block, i) => {
          switch (block.type) {
            case 'heading':
              return <h2 key={i} className="text-3xl">{block.value}</h2>

            case 'paragraph':
              return <p key={i} className="text-lg text-slate-600">{block.value}</p>

            case 'list':
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )

            case 'code':
              return (
                <CodeBlock
                  key={i}
                  label={block.label}
                  code={block.value}
                />
              )

            default:
              return null
          }
        })}
      </div>
    </section>
  )
}