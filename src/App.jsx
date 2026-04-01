import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ApiReferenceView } from './components/ApiReferenceView'
import { DocumentationLayout } from './components/DocumentationLayout'
import { ExamplesView } from './components/ExamplesView'
import { GetStartedView } from './components/GetStartedView'
import { HomeView } from './components/HomeView'
import { IntroductionView } from './components/IntroductionView'
import { PlaygroundView } from './components/PlaygroundView'
import { TablesView } from './components/TablesView'

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
          <Route path="introduccion" element={<IntroductionView />} />
          <Route path="api-reference" element={<ApiReferenceView />} />
          <Route path="examples" element={<ExamplesView />} />
        </Route>
      </Routes>
    </Layout>
  )
}