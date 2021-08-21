import { lazy } from 'react'

const route = {
  name: 'event details',
  component: lazy(() => import('./components/Page')),
  path: '/event/:event_id'
}

export default route
