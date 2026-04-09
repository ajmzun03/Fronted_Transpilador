import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import docs from '../data/docs.json'


const titles = {
  '/': 'Inicio',
  '/comenzar': 'Comenzar',
  '/documentacion': 'chotear',
  '/documentacion/api-reference': 'API Reference',
  '/documentacion/examples': 'Examples',
  '/playground': 'Playground',
  '/tables-errors': 'Tables / Errors',
}

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [expanded, setExpanded] = useState(['Comenzar', 'Documentacion', 'tables'])
  const location = useLocation()

  const title = useMemo(() => {
  if (location.pathname.startsWith('/documentacion')) {
    const slug = location.pathname.split('/')[2]
    const doc = docs.find((d) => d.slug === slug)
    return doc?.title || 'Documentación'
  }

  return titles[location.pathname] || 'ChapinScript Docs'
}, [location.pathname])

  function handleToggleSection(sectionId) {
    setExpanded((current) =>
      current.includes(sectionId)
        ? current.filter((item) => item !== sectionId)
        : [...current, sectionId],
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">
      <Sidebar
        isOpen={sidebarOpen}
        expanded={expanded}
        onToggleSection={handleToggleSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-6 py-4">
          <button
            onClick={() => setSidebarOpen((value) => !value)}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <span className="text-sm text-slate-600">{title}</span>
        </header>

        <main className="main-scrollbar flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}