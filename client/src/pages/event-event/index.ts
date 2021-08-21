import { lazy } from 'react'

const route = {
    name: 'event-event',
    path: '/config/event',
    component: lazy(() => import('./components/Page')),
}

export default route
