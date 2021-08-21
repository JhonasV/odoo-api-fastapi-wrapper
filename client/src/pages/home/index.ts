import { lazy } from 'react'

const route = {
    name: 'home',
    path: '/',
    component: lazy(() => import('./components/Page'))
}

export default route
