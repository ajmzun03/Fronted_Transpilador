import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DocumentationView } from './components/DocumentationView'
import { GetStartedView } from './components/GetStartedView'
import { HomeView } from './components/HomeView'
import { PlaygroundView } from './components/PlaygroundView'
import { TablesView } from './components/TablesView'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Comenzar" element={<GetStartedView />} />
        <Route path="/Documentacion" element={<DocumentationView />} />
        <Route path="/playground" element={<PlaygroundView />} />
        <Route path="/tables-errors" element={<TablesView />} />
      </Routes>
    </Layout>
  )
}
