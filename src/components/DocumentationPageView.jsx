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
    <section className="mx-auto max-w-4xl px-6 py-14">
      {/* 🟢 Título principal */}
      <h1 className="text-9xl font-semibold text-slate-900">
        {doc.title}
      </h1>

      {/* 📌 Descripción */}
      {doc.description && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {doc.description}
        </p>
      )}

      <div className="mt-10 space-y-8">
        {doc.content.map((block, i) => {
          switch (block.type) {

            // 🔷 Sección principal (como ##)
            case 'heading':
              return (
                <h2
                  key={i}
                  className="text-2xl font-semibold text-slate-800 mt-10"
                >
                  {block.value}
                </h2>
              )

            // 🟣 Subtítulo (como ###)
            case 'subtitle':
              return (
                <h3
                  key={i}
                  className="text-xl font-medium text-slate-700 mt-6"
                >
                  {block.value}
                </h3>
              )

            // 📄 Párrafos explicativos largos
            case 'paragraph':
              return (
                <p
                  key={i}
                    className="text-base text-slate-600 leading-relaxed whitespace-pre-line"
                    >
                      {block.value}
                </p>
              )

            // 📌 Listas tipo documentación
            case 'list':
              return (
                <ul
                  key={i}
                  className="list-disc pl-6 space-y-2 text-slate-600"
                >
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )

            // ⚡ Código (SE MANTIENE IGUAL como pediste)
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