import {
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Code2,
  Table2,
  PlayCircle,
  Search,
} from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import docs from '../data/docs.json'

const menuItems = [
  {
    id: 'Inicio',
    label: 'Inicio',
    to: '/',
    icon: Home,
  },
  {
    id: 'Comenzar',
    label: 'Comenzar',
    to: '/comenzar',
    icon: PlayCircle,
    children: [
      { label: 'Extensión de VS Code', to: '/comenzar#vscode' },
      { label: 'Ejecuta el compilador online', to: '/comenzar#online-playground' },
    ],
  },
  {
    id: 'Documentacion',
    label: 'Documentación',
    to: '/Documentacion/chotear',
    icon: BookOpen,
  },
  {
    id: 'playground',
    label: 'Playground',
    to: '/playground',
    icon: Code2,
  },
  {
    id: 'tables',
    label: 'Tables / Errors',
    to: '/tables-errors',
    icon: Table2,
    children: [
      { label: 'Lexical Errors', to: '/tables-errors?type=lexical' },
      { label: 'Syntax Errors', to: '/tables-errors?type=syntax' },
      { label: 'Semantic Errors', to: '/tables-errors?type=semantic' },
    ],
  },
]

export function Sidebar({ isOpen, expanded, onToggleSection, searchQuery, setSearchQuery }) {
  const location = useLocation()

  const processedMenuItems = menuItems.map((item) => {
    if (item.id === 'Documentacion') {
      const query = searchQuery.trim().toLowerCase()

      const filteredDocs = query
        ? docs.filter(
            (doc) =>
              doc.title.toLowerCase().includes(query) ||
              JSON.stringify(doc.content).toLowerCase().includes(query),
          )
        : docs

      return {
        ...item,
        children: filteredDocs.map((doc) => ({
          label: doc.title,
          to: `/documentacion/${doc.slug}`,
        })),
      }
    }

    return item
  })

  function isParentActive(item) {
    if (item.id === 'Documentacion') {
      return location.pathname.startsWith('/documentacion')
    }

    if (item.id === 'Comenzar') {
      return location.pathname === '/comenzar'
    }

    if (item.id === 'tables') {
      return location.pathname === '/tables-errors'
    }

    return location.pathname === item.to
  }

  return (
    <aside
      className={`${
        isOpen ? 'w-72' : 'w-0'
      } shrink-0 overflow-hidden border-r border-slate-200 bg-white transition-all duration-300`}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-slate-200 px-6 py-6">
          <h1 className="text-[18px] font-medium text-slate-900">
            Documentación de ChapinScript
          </h1>

          <div className="relative mt-5">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar en documentación..."
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </div>

        <nav className="sidebar-scrollbar flex-1 overflow-y-auto px-4 py-5">
          <div className="space-y-2">
            {processedMenuItems
              .filter((item) => {
                if (!searchQuery.trim()) return true

                const query = searchQuery.toLowerCase()
                const selfMatch = item.label.toLowerCase().includes(query)
                const childMatch = item.children?.some((child) =>
                  child.label.toLowerCase().includes(query),
                )

                return selfMatch || childMatch
              })
              .map((item) => {
                const Icon = item.icon
                const isExpanded = expanded.includes(item.id)
                const activeParent = isParentActive(item)

                return (
                  <div key={item.id}>
                    <div className="flex items-center gap-2">
                      <NavLink
                        to={item.to}
                        className={() =>
                          `flex flex-1 items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                            activeParent
                              ? 'bg-brand-50 text-brand-600'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`
                        }
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </NavLink>

                      {item.children?.length ? (
                        <button
                          onClick={() => onToggleSection(item.id)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                          aria-label={`Toggle ${item.label}`}
                        >
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                      ) : null}
                    </div>

                    {item.children?.length && isExpanded ? (
                      <div className="ml-7 mt-1 space-y-1 pb-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-1.5 text-sm transition ${
                                isActive
                                  ? 'bg-brand-50 text-brand-600'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )
              })}
          </div>
        </nav>

        <div className="border-t border-slate-200 px-5 py-4 text-xs text-slate-500">
          Versión 1.0.0
        </div>
      </div>
    </aside>
  )
}