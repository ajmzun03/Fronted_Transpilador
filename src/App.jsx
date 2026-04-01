import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DocumentationLayout } from './components/DocumentationLayout'
import { GetStartedView } from './components/GetStartedView'
import { HomeView } from './components/HomeView'
import { PlaygroundView } from './components/PlaygroundView'
import { TablesView } from './components/TablesView'
import { DocumentationPageView } from './components/DocumentationPageView'


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/comenzar" element={<GetStartedView />} />
        <Route path="/playground" element={<PlaygroundView />} />
        <Route path="/tables-errors" element={<TablesView />} />

        <Route path="/documentacion" element={<DocumentationLayout />}>
         <Route index element={<Navigate to="introduccion" replace />} />
         <Route path=":slug" element={<DocumentationPageView />} />
        </Route>
      </Routes>
    </Layout>
  )
}