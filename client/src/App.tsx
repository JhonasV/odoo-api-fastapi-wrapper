import { Suspense } from 'react'
import Routes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Catch from './components/Catch'
import Layout from './components/Layout'
import Skeleton from './components/common/Skeleton'

function App() {
  return (
    <Router>
      <Layout>
        <Catch title="Ha ocurrido un problema al organizar el evento.">
          <Suspense fallback={<Skeleton />}>
            <Routes />
          </Suspense>
        </Catch>
      </Layout>
    </Router>
  )
}

export default App
